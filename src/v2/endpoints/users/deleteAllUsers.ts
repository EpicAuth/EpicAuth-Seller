import {
    deleteAllUsers as coreDeleteAllUsers,
    type DeleteAllUsersData,
    type DeleteAllUsersResponse,
    type DeleteAllUsersResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteAllUsers(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteAllUsersData>): ReturnType<typeof coreDeleteAllUsers> =>
        execute(coreDeleteAllUsers, args[0]) as ReturnType<typeof coreDeleteAllUsers>;
}

export { coreDeleteAllUsers as deleteAllUsers };
export type { DeleteAllUsersData, DeleteAllUsersResponse, DeleteAllUsersResponses };
