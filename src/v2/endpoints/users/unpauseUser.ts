import {
    unpauseUser as coreUnpauseUser,
    type UnpauseUserData,
    type UnpauseUserResponse,
    type UnpauseUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUnpauseUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UnpauseUserData>): ReturnType<typeof coreUnpauseUser> =>
        execute(coreUnpauseUser, args[0]) as ReturnType<typeof coreUnpauseUser>;
}

export { coreUnpauseUser as unpauseUser };
export type { UnpauseUserData, UnpauseUserResponse, UnpauseUserResponses };
