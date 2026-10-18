import {
    createVar as coreCreateVar,
    type CreateVarData,
    type CreateVarResponse,
    type CreateVarResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateVar(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateVarData>): ReturnType<typeof coreCreateVar> =>
        execute(coreCreateVar, args[0]) as ReturnType<typeof coreCreateVar>;
}

export { coreCreateVar as createVar };
export type { CreateVarData, CreateVarResponse, CreateVarResponses };
