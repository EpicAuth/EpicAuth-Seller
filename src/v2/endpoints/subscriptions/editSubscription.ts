import {
    editSubscription as coreEditSubscription,
    type EditSubscriptionData,
    type EditSubscriptionResponse,
    type EditSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createEditSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<EditSubscriptionData>): ReturnType<typeof coreEditSubscription> =>
        execute(coreEditSubscription, args[0]) as ReturnType<typeof coreEditSubscription>;
}

export { coreEditSubscription as editSubscription };
export type { EditSubscriptionData, EditSubscriptionResponse, EditSubscriptionResponses };
