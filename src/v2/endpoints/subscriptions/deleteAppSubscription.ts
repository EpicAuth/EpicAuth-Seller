import {
    deleteAppSubscription as coreDeleteAppSubscription,
    type DeleteAppSubscriptionData,
    type DeleteAppSubscriptionResponse,
    type DeleteAppSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteAppSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteAppSubscriptionData>): ReturnType<typeof coreDeleteAppSubscription> =>
        execute(coreDeleteAppSubscription, args[0]) as ReturnType<typeof coreDeleteAppSubscription>;
}

export { coreDeleteAppSubscription as deleteAppSubscription };
export type { DeleteAppSubscriptionData, DeleteAppSubscriptionResponse, DeleteAppSubscriptionResponses };
