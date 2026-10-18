import {
    deleteUser as coreDeleteUser,
    type DeleteUserData,
    type DeleteUserResponse,
    type DeleteUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteUserData>): ReturnType<typeof coreDeleteUser> =>
        execute(coreDeleteUser, args[0]) as ReturnType<typeof coreDeleteUser>;
}

export { coreDeleteUser as deleteUser };
export type { DeleteUserData, DeleteUserResponse, DeleteUserResponses };
