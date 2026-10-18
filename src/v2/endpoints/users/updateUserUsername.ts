import {
    updateUserUsername as coreUpdateUserUsername,
    type UpdateUserUsernameData,
    type UpdateUserUsernameResponse,
    type UpdateUserUsernameResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUpdateUserUsername(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UpdateUserUsernameData>): ReturnType<typeof coreUpdateUserUsername> =>
        execute(coreUpdateUserUsername, args[0]) as ReturnType<typeof coreUpdateUserUsername>;
}

export { coreUpdateUserUsername as updateUserUsername };
export type { UpdateUserUsernameData, UpdateUserUsernameResponse, UpdateUserUsernameResponses };
