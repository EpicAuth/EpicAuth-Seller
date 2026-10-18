import {
    allSeller6 as allSeller,
    type AllSeller6Data as AllSellerData,
} from "@epicauth/seller-core";

import {
    isSellerApiError,
    SellerError,
} from "../errors/error";

import type {
    SellerInput,
    SellerOptions,
    SellerRequester,
    SellerType,
} from "./types";

export function createSellerRequester(
    options: SellerOptions,
): SellerRequester {
    const sellerKey = options.sellerKey;
    const baseUrl = options.baseUrl ?? "https://epicauth.cc/api";

    return async <T extends SellerType>(
        body: {
            type: T;
        } & SellerInput<T>,
    ) => {
        try {
            const result = await allSeller({
                baseUrl,
                body: {
                    sellerkey: sellerKey,
                    ...body,
                } as AllSellerData["body"],
            });

            // Capture the payload before `"error" in result` narrowing:
            // TypeScript narrows the else-branch to `never` otherwise.
            const responseData = result.data;
            const responseStatus = result.response?.status ?? 0;

            // The Seller API reports application-level failures as a
            // `{ success: false, message }` payload inside a successful
            // HTTP response, so those must be normalized as well.
            if (isSellerApiError(responseData)) {
                throw new SellerError(responseData.message, {
                    status: responseStatus,
                    code: responseData.code,
                    details: responseData,
                });
            }

            if ("error" in result) {
                const status = responseStatus;
                const error = result.error;

                if (isSellerApiError(error)) {
                    throw new SellerError(error.message, {
                        status,
                        details: error,
                    });
                }

                throw new SellerError("Seller API request failed", {
                    status,
                    details: error,
                });
            }

            return result;
        } catch (error) {
            if (error instanceof SellerError) {
                throw error;
            }

            throw new SellerError(
                error instanceof Error
                    ? error.message
                    : "Seller API request failed",
                {
                    status: 0,
                    details: error,
                },
            );
        }
    };
}