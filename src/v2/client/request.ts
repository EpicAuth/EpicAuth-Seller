import { isSellerApiError, SellerError } from "../errors/error";
import type { SellerOptions } from "./types";

const QUERY_FUNCTION_PREFIXES = [
    "get",
    "fetch",
    "verify",
    "kill",
    "mute",
    "unmute",
    "count",
];

function isQueryOperation(fnName: string): boolean {
    return QUERY_FUNCTION_PREFIXES.some((prefix) => fnName.startsWith(prefix));
}

export function createSellerExecutor(options: SellerOptions) {
    const sellerKey = options.sellerKey;
    const baseUrl = options.baseUrl ?? "https://epicauth.cc/api";

    return async function execute<TResult = any>(
        fn: (options: any) => Promise<TResult>,
        data?: any,
    ): Promise<TResult> {
        const fnName = fn.name || "";
        const isQuery = isQueryOperation(fnName);

        const opts: any = {
            baseUrl,
        };

        if (data && typeof data === "object") {
            if ("query" in data || "body" in data) {
                if ("query" in data && typeof data.query === "object") {
                    opts.query = { sellerkey: sellerKey, ...data.query };
                }
                if ("body" in data && typeof data.body === "object") {
                    opts.body = { sellerkey: sellerKey, ...data.body };
                }
            } else if (isQuery) {
                opts.query = {
                    sellerkey: sellerKey,
                    ...data,
                };
            } else {
                opts.body = {
                    sellerkey: sellerKey,
                    ...data,
                };
            }
        } else if (isQuery) {
            opts.query = {
                sellerkey: sellerKey,
            };
        } else {
            opts.body = {
                sellerkey: sellerKey,
            };
        }

        try {
            const result = await fn(opts);

            const responseData = (result as any)?.data;
            const responseStatus = (result as any)?.response?.status ?? 0;

            if (isSellerApiError(responseData)) {
                throw new SellerError(responseData.message, {
                    status: responseStatus,
                    code: responseData.code,
                    details: responseData,
                });
            }

            if (result && typeof result === "object" && "error" in result && (result as any).error) {
                const error = (result as any).error;
                if (isSellerApiError(error)) {
                    throw new SellerError(error.message, {
                        status: responseStatus,
                        details: error,
                    });
                }

                throw new SellerError("Seller API request failed", {
                    status: responseStatus,
                    details: error,
                });
            }

            return result;
        } catch (error) {
            if (error instanceof SellerError) {
                throw error;
            }

            throw new SellerError(
                error instanceof Error ? error.message : "Seller API request failed",
                {
                    status: 0,
                    details: error,
                },
            );
        }
    };
}
