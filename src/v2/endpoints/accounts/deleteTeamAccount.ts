import {
    deleteTeamAccount as coreDeleteTeamAccount,
    type DeleteTeamAccountData,
    type DeleteTeamAccountResponse,
    type DeleteTeamAccountResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteTeamAccount(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteTeamAccountData>): ReturnType<typeof coreDeleteTeamAccount> =>
        execute(coreDeleteTeamAccount, args[0]) as ReturnType<typeof coreDeleteTeamAccount>;
}

export { coreDeleteTeamAccount as deleteTeamAccount };
export type { DeleteTeamAccountData, DeleteTeamAccountResponse, DeleteTeamAccountResponses };
