import {
    updateTeamBalance as coreUpdateTeamBalance,
    type UpdateTeamBalanceData,
    type UpdateTeamBalanceResponse,
    type UpdateTeamBalanceResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUpdateTeamBalance(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UpdateTeamBalanceData>): ReturnType<typeof coreUpdateTeamBalance> =>
        execute(coreUpdateTeamBalance, args[0]) as ReturnType<typeof coreUpdateTeamBalance>;
}

export { coreUpdateTeamBalance as updateTeamBalance };
export type { UpdateTeamBalanceData, UpdateTeamBalanceResponse, UpdateTeamBalanceResponses };
