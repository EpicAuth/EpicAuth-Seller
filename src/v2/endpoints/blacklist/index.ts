import type { SellerExecutor } from "../../client/types";

import { createGetBlacklists } from "./getBlacklists";
import { createCreateBlacklist } from "./createBlacklist";
import { createDeleteBlacklist } from "./deleteBlacklist";
import { createDeleteAllBlacklists } from "./deleteAllBlacklists";

export function createBlacklist(execute: SellerExecutor) {
    const getBlacklists = createGetBlacklists(execute);
    const createBlacklist = createCreateBlacklist(execute);
    const deleteBlacklist = createDeleteBlacklist(execute);
    const deleteAllBlacklists = createDeleteAllBlacklists(execute);

    return {
        getAll: getBlacklists,
        create: createBlacklist,
        delete: deleteBlacklist,
        deleteAll: deleteAllBlacklists,
    };
}

export * from "./getBlacklists";
export * from "./createBlacklist";
export * from "./deleteBlacklist";
export * from "./deleteAllBlacklists";
