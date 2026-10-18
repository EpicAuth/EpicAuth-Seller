import {
    activateUser as coreActivateUser,
    type ActivateUserData,
    type ActivateUserResponse,
    type ActivateUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createActivateUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<ActivateUserData>): ReturnType<typeof coreActivateUser> =>
        execute(coreActivateUser, args[0]) as ReturnType<typeof coreActivateUser>;
}

export { coreActivateUser as activateUser };
export type { ActivateUserData, ActivateUserResponse, ActivateUserResponses };
