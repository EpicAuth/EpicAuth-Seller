import type { SellerExecutor } from "../../../client/types";

import { createGetUserVars } from "./getUserVars";
import { createSetUserVar } from "./setUserVar";
import { createDeleteUserVar } from "./deleteUserVar";
import { createGetAllUserVars } from "./getAllUserVars";
import { createMassDeleteUserVars } from "./massDeleteUserVars";

export function createUserVars(execute: SellerExecutor) {
    const getUserVars = createGetUserVars(execute);
    const setUserVar = createSetUserVar(execute);
    const deleteUserVar = createDeleteUserVar(execute);
    const getAllUserVars = createGetAllUserVars(execute);
    const massDeleteUserVars = createMassDeleteUserVars(execute);

    return {
        get: getUserVars,
        getAll: getAllUserVars,
        set: setUserVar,
        delete: deleteUserVar,
        deleteAll: massDeleteUserVars,
    };
}

export * from "./getUserVars";
export * from "./setUserVar";
export * from "./deleteUserVar";
export * from "./getAllUserVars";
export * from "./massDeleteUserVars";
