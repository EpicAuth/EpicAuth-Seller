import {
    resetUserPassword as coreResetUserPassword,
    type ResetUserPasswordData,
    type ResetUserPasswordResponse,
    type ResetUserPasswordResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createResetUserPassword(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<ResetUserPasswordData>): ReturnType<typeof coreResetUserPassword> =>
        execute(coreResetUserPassword, args[0]) as ReturnType<typeof coreResetUserPassword>;
}

export { coreResetUserPassword as resetUserPassword };
export type { ResetUserPasswordData, ResetUserPasswordResponse, ResetUserPasswordResponses };
