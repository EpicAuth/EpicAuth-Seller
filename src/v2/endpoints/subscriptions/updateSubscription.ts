import {
    updateSubscription as coreUpdateSubscription,
    type UpdateSubscriptionData,
    type UpdateSubscriptionResponse,
    type UpdateSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUpdateSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UpdateSubscriptionData>): ReturnType<typeof coreUpdateSubscription> =>
        execute(coreUpdateSubscription, args[0]) as ReturnType<typeof coreUpdateSubscription>;
}

export { coreUpdateSubscription as updateSubscription };
export type { UpdateSubscriptionData, UpdateSubscriptionResponse, UpdateSubscriptionResponses };
