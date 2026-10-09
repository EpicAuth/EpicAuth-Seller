import type { AllSeller6Data as AllSellerData } from "@epicauth/seller-core";

export interface SellerOptions {
    sellerKey: string;
    baseUrl?: string;
}

export type SellerRequest = AllSellerData["body"];

export type SellerType = SellerRequest["type"];

export type SellerRequestByType<T extends SellerType> =
    Extract<SellerRequest, { type: T }>;

export type SellerInput<T extends SellerType> =
    Omit<SellerRequestByType<T>, "sellerkey" | "type">;

export type SellerRequester = <T extends SellerType>(
    body: {
        type: T;
    } & SellerInput<T>,
) => ReturnType<typeof import("@epicauth/seller-core").allSeller>;

/**
 * Resolved return type of every SDK method.
 *
 * On failure the shared requester throws a {@link SellerError}, so successful
 * calls resolve with `data` populated and `error` undefined.
 *
 * Note: `@epicauth/seller-core` does not generate per-operation response
 * types, so `data` is typed as `unknown` and must be narrowed by the caller.
 */
export type SellerResult = Awaited<ReturnType<SellerRequester>>;