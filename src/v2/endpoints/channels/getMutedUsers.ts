import {
    getMutedUsers as coreGetMutedUsers,
    type GetMutedUsersData,
    type GetMutedUsersResponse,
    type GetMutedUsersResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetMutedUsers(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetMutedUsersData>): ReturnType<typeof coreGetMutedUsers> =>
        execute(coreGetMutedUsers, args[0]) as ReturnType<typeof coreGetMutedUsers>;
}

export { coreGetMutedUsers as getMutedUsers };
export type { GetMutedUsersData, GetMutedUsersResponse, GetMutedUsersResponses };
