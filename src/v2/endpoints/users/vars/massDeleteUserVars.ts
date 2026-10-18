import {
    massDeleteUserVars as coreMassDeleteUserVars,
    type MassDeleteUserVarsData,
    type MassDeleteUserVarsResponse,
    type MassDeleteUserVarsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../../client/types";

export function createMassDeleteUserVars(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<MassDeleteUserVarsData>): ReturnType<typeof coreMassDeleteUserVars> =>
        execute(coreMassDeleteUserVars, args[0]) as ReturnType<typeof coreMassDeleteUserVars>;
}

export { coreMassDeleteUserVars as massDeleteUserVars };
export type { MassDeleteUserVarsData, MassDeleteUserVarsResponse, MassDeleteUserVarsResponses };
