import {
    getUserSubscription as coreGetUserSubscription,
    type GetUserSubscriptionData,
    type GetUserSubscriptionResponse,
    type GetUserSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetUserSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetUserSubscriptionData>): ReturnType<typeof coreGetUserSubscription> =>
        execute(coreGetUserSubscription, args[0]) as ReturnType<typeof coreGetUserSubscription>;
}

export { coreGetUserSubscription as getUserSubscription };
export type { GetUserSubscriptionData, GetUserSubscriptionResponse, GetUserSubscriptionResponses };
