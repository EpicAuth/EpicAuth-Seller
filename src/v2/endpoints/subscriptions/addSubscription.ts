import {
    addSubscription as coreAddSubscription,
    type AddSubscriptionData,
    type AddSubscriptionResponse,
    type AddSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createAddSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<AddSubscriptionData>): ReturnType<typeof coreAddSubscription> =>
        execute(coreAddSubscription, args[0]) as ReturnType<typeof coreAddSubscription>;
}

export { coreAddSubscription as addSubscription };
export type { AddSubscriptionData, AddSubscriptionResponse, AddSubscriptionResponses };
