import {
    getAllUserVars as coreGetAllUserVars,
    type GetAllUserVarsData,
    type GetAllUserVarsResponse,
    type GetAllUserVarsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../../client/types";

export function createGetAllUserVars(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetAllUserVarsData>): ReturnType<typeof coreGetAllUserVars> =>
        execute(coreGetAllUserVars, args[0]) as ReturnType<typeof coreGetAllUserVars>;
}

export { coreGetAllUserVars as getAllUserVars };
export type { GetAllUserVarsData, GetAllUserVarsResponse, GetAllUserVarsResponses };
