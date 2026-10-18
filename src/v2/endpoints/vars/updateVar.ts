import {
    updateVar as coreUpdateVar,
    type UpdateVarData,
    type UpdateVarResponse,
    type UpdateVarResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUpdateVar(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UpdateVarData>): ReturnType<typeof coreUpdateVar> =>
        execute(coreUpdateVar, args[0]) as ReturnType<typeof coreUpdateVar>;
}

export { coreUpdateVar as updateVar };
export type { UpdateVarData, UpdateVarResponse, UpdateVarResponses };
