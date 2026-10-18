import {
    getUsers as coreGetUsers,
    type GetUsersData,
    type GetUsersResponse,
    type GetUsersResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetUsers(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetUsersData>): ReturnType<typeof coreGetUsers> =>
        execute(coreGetUsers, args[0]) as ReturnType<typeof coreGetUsers>;
}

export { coreGetUsers as getUsers };
export type { GetUsersData, GetUsersResponse, GetUsersResponses };
