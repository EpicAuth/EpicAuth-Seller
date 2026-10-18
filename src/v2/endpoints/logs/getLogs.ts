import {
    getLogs as coreGetLogs,
    type GetLogsData,
    type GetLogsResponse,
    type GetLogsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetLogs(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetLogsData>): ReturnType<typeof coreGetLogs> =>
        execute(coreGetLogs, args[0]) as ReturnType<typeof coreGetLogs>;
}

export { coreGetLogs as getLogs };
export type { GetLogsData, GetLogsResponse, GetLogsResponses };
