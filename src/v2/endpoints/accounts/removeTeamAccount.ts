import {
    removeTeamAccount as coreRemoveTeamAccount,
    type RemoveTeamAccountData,
    type RemoveTeamAccountResponse,
    type RemoveTeamAccountResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createRemoveTeamAccount(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<RemoveTeamAccountData>): ReturnType<typeof coreRemoveTeamAccount> =>
        execute(coreRemoveTeamAccount, args[0]) as ReturnType<typeof coreRemoveTeamAccount>;
}

export { coreRemoveTeamAccount as removeTeamAccount };
export type { RemoveTeamAccountData, RemoveTeamAccountResponse, RemoveTeamAccountResponses };
