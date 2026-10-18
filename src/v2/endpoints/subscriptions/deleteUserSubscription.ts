import {
    deleteUserSubscription as coreDeleteUserSubscription,
    type DeleteUserSubscriptionData,
    type DeleteUserSubscriptionResponse,
    type DeleteUserSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteUserSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteUserSubscriptionData>): ReturnType<typeof coreDeleteUserSubscription> =>
        execute(coreDeleteUserSubscription, args[0]) as ReturnType<typeof coreDeleteUserSubscription>;
}

export { coreDeleteUserSubscription as deleteUserSubscription };
export type { DeleteUserSubscriptionData, DeleteUserSubscriptionResponse, DeleteUserSubscriptionResponses };
