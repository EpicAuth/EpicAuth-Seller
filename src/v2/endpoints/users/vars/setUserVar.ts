import {
    setUserVar as coreSetUserVar,
    type SetUserVarData,
    type SetUserVarResponse,
    type SetUserVarResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../../client/types";

export function createSetUserVar(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<SetUserVarData>): ReturnType<typeof coreSetUserVar> =>
        execute(coreSetUserVar, args[0]) as ReturnType<typeof coreSetUserVar>;
}

export { coreSetUserVar as setUserVar };
export type { SetUserVarData, SetUserVarResponse, SetUserVarResponses };
