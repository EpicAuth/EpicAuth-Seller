import {
    setTeamBalance as coreSetTeamBalance,
    type SetTeamBalanceData,
    type SetTeamBalanceResponse,
    type SetTeamBalanceResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createSetTeamBalance(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<SetTeamBalanceData>): ReturnType<typeof coreSetTeamBalance> =>
        execute(coreSetTeamBalance, args[0]) as ReturnType<typeof coreSetTeamBalance>;
}

export { coreSetTeamBalance as setTeamBalance };
export type { SetTeamBalanceData, SetTeamBalanceResponse, SetTeamBalanceResponses };
