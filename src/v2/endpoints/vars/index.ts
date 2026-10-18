import type { SellerExecutor } from "../../client/types";

import { createGetVars } from "./getVars";
import { createGetVar } from "./getVar";
import { createCreateVar } from "./createVar";
import { createUpdateVar } from "./updateVar";
import { createDeleteVar } from "./deleteVar";
import { createDeleteAllVars } from "./deleteAllVars";

export function createVars(execute: SellerExecutor) {
    const getVars = createGetVars(execute);
    const getVar = createGetVar(execute);
    const createVar = createCreateVar(execute);
    const updateVar = createUpdateVar(execute);
    const deleteVar = createDeleteVar(execute);
    const deleteAllVars = createDeleteAllVars(execute);

    return {
        getAll: getVars,
        get: getVar,
        create: createVar,
        update: updateVar,
        delete: deleteVar,
        deleteAll: deleteAllVars,
    };
}

export * from "./getVars";
export * from "./getVar";
export * from "./createVar";
export * from "./updateVar";
export * from "./deleteVar";
export * from "./deleteAllVars";
