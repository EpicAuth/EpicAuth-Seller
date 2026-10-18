import {
    getUserVars as coreGetUserVars,
    type GetUserVarsData,
    type GetUserVarsResponse,
    type GetUserVarsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../../client/types";

export function createGetUserVars(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetUserVarsData>): ReturnType<typeof coreGetUserVars> =>
        execute(coreGetUserVars, args[0]) as ReturnType<typeof coreGetUserVars>;
}

export { coreGetUserVars as getUserVars };
export type { GetUserVarsData, GetUserVarsResponse, GetUserVarsResponses };
