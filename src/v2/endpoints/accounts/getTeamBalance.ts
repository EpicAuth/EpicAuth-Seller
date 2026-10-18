import {
    getTeamBalance as coreGetTeamBalance,
    type GetTeamBalanceData,
    type GetTeamBalanceResponse,
    type GetTeamBalanceResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetTeamBalance(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetTeamBalanceData>): ReturnType<typeof coreGetTeamBalance> =>
        execute(coreGetTeamBalance, args[0]) as ReturnType<typeof coreGetTeamBalance>;
}

export { coreGetTeamBalance as getTeamBalance };
export type { GetTeamBalanceData, GetTeamBalanceResponse, GetTeamBalanceResponses };
