import {
    banUser as coreBanUser,
    type BanUserData,
    type BanUserResponse,
    type BanUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createBanUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<BanUserData>): ReturnType<typeof coreBanUser> =>
        execute(coreBanUser, args[0]) as ReturnType<typeof coreBanUser>;
}

export { coreBanUser as banUser };
export type { BanUserData, BanUserResponse, BanUserResponses };
