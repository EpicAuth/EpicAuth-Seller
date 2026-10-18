import type { SellerExecutor } from "../../client/types";

import { createCreateTeamAccount } from "./createTeamAccount";
import { createDeleteTeamAccount } from "./deleteTeamAccount";
import { createGetTeamBalance } from "./getTeamBalance";
import { createSetTeamBalance } from "./setTeamBalance";

export function createAccounts(execute: SellerExecutor) {
    const createTeamAccount = createCreateTeamAccount(execute);
    const deleteTeamAccount = createDeleteTeamAccount(execute);
    const getTeamBalance = createGetTeamBalance(execute);
    const setTeamBalance = createSetTeamBalance(execute);

    return {
        create: createTeamAccount,
        delete: deleteTeamAccount,
        getBalance: getTeamBalance,
        setBalance: setTeamBalance,
    };
}

export * from "./createTeamAccount";
export * from "./deleteTeamAccount";
export * from "./getTeamBalance";
export * from "./setTeamBalance";
