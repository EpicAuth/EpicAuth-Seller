import {
    unmuteUser as coreUnmuteUser,
    type UnmuteUserData,
    type UnmuteUserResponse,
    type UnmuteUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUnmuteUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UnmuteUserData>): ReturnType<typeof coreUnmuteUser> =>
        execute(coreUnmuteUser, args[0]) as ReturnType<typeof coreUnmuteUser>;
}

export { coreUnmuteUser as unmuteUser };
export type { UnmuteUserData, UnmuteUserResponse, UnmuteUserResponses };
