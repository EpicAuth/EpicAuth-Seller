import {
    unbanUser as coreUnbanUser,
    type UnbanUserData,
    type UnbanUserResponse,
    type UnbanUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUnbanUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UnbanUserData>): ReturnType<typeof coreUnbanUser> =>
        execute(coreUnbanUser, args[0]) as ReturnType<typeof coreUnbanUser>;
}

export { coreUnbanUser as unbanUser };
export type { UnbanUserData, UnbanUserResponse, UnbanUserResponses };
