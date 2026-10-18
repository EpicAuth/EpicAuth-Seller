import {
    deleteVar as coreDeleteVar,
    type DeleteVarData,
    type DeleteVarResponse,
    type DeleteVarResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteVar(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteVarData>): ReturnType<typeof coreDeleteVar> =>
        execute(coreDeleteVar, args[0]) as ReturnType<typeof coreDeleteVar>;
}

export { coreDeleteVar as deleteVar };
export type { DeleteVarData, DeleteVarResponse, DeleteVarResponses };
