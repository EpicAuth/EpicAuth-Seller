import {
    delUserSubscription as coreDelUserSubscription,
    type DelUserSubscriptionData,
    type DelUserSubscriptionResponse,
    type DelUserSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDelUserSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DelUserSubscriptionData>): ReturnType<typeof coreDelUserSubscription> =>
        execute(coreDelUserSubscription, args[0]) as ReturnType<typeof coreDelUserSubscription>;
}

export { coreDelUserSubscription as delUserSubscription };
export type { DelUserSubscriptionData, DelUserSubscriptionResponse, DelUserSubscriptionResponses };
