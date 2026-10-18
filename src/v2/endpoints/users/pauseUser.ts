import {
    pauseUser as corePauseUser,
    type PauseUserData,
    type PauseUserResponse,
    type PauseUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createPauseUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<PauseUserData>): ReturnType<typeof corePauseUser> =>
        execute(corePauseUser, args[0]) as ReturnType<typeof corePauseUser>;
}

export { corePauseUser as pauseUser };
export type { PauseUserData, PauseUserResponse, PauseUserResponses };
