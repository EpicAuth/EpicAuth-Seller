import {
    unpauseAppSubscription as coreUnpauseAppSubscription,
    type UnpauseAppSubscriptionData,
    type UnpauseAppSubscriptionResponse,
    type UnpauseAppSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUnpauseAppSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UnpauseAppSubscriptionData>): ReturnType<typeof coreUnpauseAppSubscription> =>
        execute(coreUnpauseAppSubscription, args[0]) as ReturnType<typeof coreUnpauseAppSubscription>;
}

export { coreUnpauseAppSubscription as unpauseAppSubscription };
export type { UnpauseAppSubscriptionData, UnpauseAppSubscriptionResponse, UnpauseAppSubscriptionResponses };
