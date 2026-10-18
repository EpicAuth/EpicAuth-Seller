import {
    resetUser as coreResetUser,
    type ResetUserData,
    type ResetUserResponse,
    type ResetUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createResetUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<ResetUserData>): ReturnType<typeof coreResetUser> =>
        execute(coreResetUser, args[0]) as ReturnType<typeof coreResetUser>;
}

export { coreResetUser as resetUser };
export type { ResetUserData, ResetUserResponse, ResetUserResponses };
