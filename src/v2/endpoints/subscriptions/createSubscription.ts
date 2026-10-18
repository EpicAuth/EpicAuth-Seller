import {
    createSubscription as coreCreateSubscription,
    type CreateSubscriptionData,
    type CreateSubscriptionResponse,
    type CreateSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateSubscriptionData>): ReturnType<typeof coreCreateSubscription> =>
        execute(coreCreateSubscription, args[0]) as ReturnType<typeof coreCreateSubscription>;
}

export { coreCreateSubscription as createSubscription };
export type { CreateSubscriptionData, CreateSubscriptionResponse, CreateSubscriptionResponses };
