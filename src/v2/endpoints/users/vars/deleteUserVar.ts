import {
    deleteUserVar as coreDeleteUserVar,
    type DeleteUserVarData,
    type DeleteUserVarResponse,
    type DeleteUserVarResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../../client/types";

export function createDeleteUserVar(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteUserVarData>): ReturnType<typeof coreDeleteUserVar> =>
        execute(coreDeleteUserVar, args[0]) as ReturnType<typeof coreDeleteUserVar>;
}

export { coreDeleteUserVar as deleteUserVar };
export type { DeleteUserVarData, DeleteUserVarResponse, DeleteUserVarResponses };
