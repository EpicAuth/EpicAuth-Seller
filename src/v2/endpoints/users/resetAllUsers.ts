import {
    resetAllUsers as coreResetAllUsers,
    type ResetAllUsersData,
    type ResetAllUsersResponse,
    type ResetAllUsersResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createResetAllUsers(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<ResetAllUsersData>): ReturnType<typeof coreResetAllUsers> =>
        execute(coreResetAllUsers, args[0]) as ReturnType<typeof coreResetAllUsers>;
}

export { coreResetAllUsers as resetAllUsers };
export type { ResetAllUsersData, ResetAllUsersResponse, ResetAllUsersResponses };
