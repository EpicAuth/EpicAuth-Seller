import {
    extendSubscription as coreExtendSubscription,
    type ExtendSubscriptionData,
    type ExtendSubscriptionResponse,
    type ExtendSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createExtendSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<ExtendSubscriptionData>): ReturnType<typeof coreExtendSubscription> =>
        execute(coreExtendSubscription, args[0]) as ReturnType<typeof coreExtendSubscription>;
}

export { coreExtendSubscription as extendSubscription };
export type { ExtendSubscriptionData, ExtendSubscriptionResponse, ExtendSubscriptionResponses };
