import {
    deleteAllLogs as coreDeleteAllLogs,
    type DeleteAllLogsData,
    type DeleteAllLogsResponse,
    type DeleteAllLogsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteAllLogs(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteAllLogsData>): ReturnType<typeof coreDeleteAllLogs> =>
        execute(coreDeleteAllLogs, args[0]) as ReturnType<typeof coreDeleteAllLogs>;
}

export { coreDeleteAllLogs as deleteAllLogs };
export type { DeleteAllLogsData, DeleteAllLogsResponse, DeleteAllLogsResponses };
