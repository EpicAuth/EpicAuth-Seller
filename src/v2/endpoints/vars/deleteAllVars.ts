import {
    deleteAllVars as coreDeleteAllVars,
    type DeleteAllVarsData,
    type DeleteAllVarsResponse,
    type DeleteAllVarsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteAllVars(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteAllVarsData>): ReturnType<typeof coreDeleteAllVars> =>
        execute(coreDeleteAllVars, args[0]) as ReturnType<typeof coreDeleteAllVars>;
}

export { coreDeleteAllVars as deleteAllVars };
export type { DeleteAllVarsData, DeleteAllVarsResponse, DeleteAllVarsResponses };
