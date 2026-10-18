import {
    getVar as coreGetVar,
    type GetVarData,
    type GetVarResponse,
    type GetVarResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetVar(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetVarData>): ReturnType<typeof coreGetVar> =>
        execute(coreGetVar, args[0]) as ReturnType<typeof coreGetVar>;
}

export { coreGetVar as getVar };
export type { GetVarData, GetVarResponse, GetVarResponses };
