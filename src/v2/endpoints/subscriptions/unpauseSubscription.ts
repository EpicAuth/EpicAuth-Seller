import {
    unpauseSubscription as coreUnpauseSubscription,
    type UnpauseSubscriptionData,
    type UnpauseSubscriptionResponse,
    type UnpauseSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUnpauseSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UnpauseSubscriptionData>): ReturnType<typeof coreUnpauseSubscription> =>
        execute(coreUnpauseSubscription, args[0]) as ReturnType<typeof coreUnpauseSubscription>;
}

export { coreUnpauseSubscription as unpauseSubscription };
export type { UnpauseSubscriptionData, UnpauseSubscriptionResponse, UnpauseSubscriptionResponses };
