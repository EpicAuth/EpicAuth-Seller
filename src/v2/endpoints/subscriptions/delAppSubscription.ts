import {
    delAppSubscription as coreDelAppSubscription,
    type DelAppSubscriptionData,
    type DelAppSubscriptionResponse,
    type DelAppSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDelAppSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DelAppSubscriptionData>): ReturnType<typeof coreDelAppSubscription> =>
        execute(coreDelAppSubscription, args[0]) as ReturnType<typeof coreDelAppSubscription>;
}

export { coreDelAppSubscription as delAppSubscription };
export type { DelAppSubscriptionData, DelAppSubscriptionResponse, DelAppSubscriptionResponses };
