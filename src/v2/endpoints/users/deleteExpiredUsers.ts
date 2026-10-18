import {
    deleteExpiredUsers as coreDeleteExpiredUsers,
    type DeleteExpiredUsersData,
    type DeleteExpiredUsersResponse,
    type DeleteExpiredUsersResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteExpiredUsers(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteExpiredUsersData>): ReturnType<typeof coreDeleteExpiredUsers> =>
        execute(coreDeleteExpiredUsers, args[0]) as ReturnType<typeof coreDeleteExpiredUsers>;
}

export { coreDeleteExpiredUsers as deleteExpiredUsers };
export type { DeleteExpiredUsersData, DeleteExpiredUsersResponse, DeleteExpiredUsersResponses };
