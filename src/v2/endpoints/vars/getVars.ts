import {
    getVars as coreGetVars,
    type GetVarsData,
    type GetVarsResponse,
    type GetVarsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetVars(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetVarsData>): ReturnType<typeof coreGetVars> =>
        execute(coreGetVars, args[0]) as ReturnType<typeof coreGetVars>;
}

export { coreGetVars as getVars };
export type { GetVarsData, GetVarsResponse, GetVarsResponses };
