import {
    verifyUser as coreVerifyUser,
    type VerifyUserData,
    type VerifyUserResponse,
    type VerifyUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createVerifyUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<VerifyUserData>): ReturnType<typeof coreVerifyUser> =>
        execute(coreVerifyUser, args[0]) as ReturnType<typeof coreVerifyUser>;
}

export { coreVerifyUser as verifyUser };
export type { VerifyUserData, VerifyUserResponse, VerifyUserResponses };
