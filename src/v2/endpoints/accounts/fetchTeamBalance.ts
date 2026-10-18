import {
    fetchTeamBalance as coreFetchTeamBalance,
    type FetchTeamBalanceData,
    type FetchTeamBalanceResponse,
    type FetchTeamBalanceResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createFetchTeamBalance(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<FetchTeamBalanceData>): ReturnType<typeof coreFetchTeamBalance> =>
        execute(coreFetchTeamBalance, args[0]) as ReturnType<typeof coreFetchTeamBalance>;
}

export { coreFetchTeamBalance as fetchTeamBalance };
export type { FetchTeamBalanceData, FetchTeamBalanceResponse, FetchTeamBalanceResponses };
