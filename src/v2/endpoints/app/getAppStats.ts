import {
    getAppStats as coreGetAppStats,
    type GetAppStatsData,
    type GetAppStatsResponse,
    type GetAppStatsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetAppStats(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetAppStatsData>): ReturnType<typeof coreGetAppStats> =>
        execute(coreGetAppStats, args[0]) as ReturnType<typeof coreGetAppStats>;
}

export { coreGetAppStats as getAppStats };
export type { GetAppStatsData, GetAppStatsResponse, GetAppStatsResponses };
