import {
    muteUser as coreMuteUser,
    type MuteUserData,
    type MuteUserResponse,
    type MuteUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createMuteUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<MuteUserData>): ReturnType<typeof coreMuteUser> =>
        execute(coreMuteUser, args[0]) as ReturnType<typeof coreMuteUser>;
}

export { coreMuteUser as muteUser };
export type { MuteUserData, MuteUserResponse, MuteUserResponses };
