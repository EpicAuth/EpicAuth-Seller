import type { SellerExecutor } from "../../client/types";

import { createGetLogs } from "./getLogs";
import { createDeleteAllLogs } from "./deleteAllLogs";

export function createLogs(execute: SellerExecutor) {
    const getLogs = createGetLogs(execute);
    const deleteAllLogs = createDeleteAllLogs(execute);

    return {
        getAll: getLogs,
        deleteAll: deleteAllLogs,
    };
}

export * from "./getLogs";
export * from "./deleteAllLogs";
