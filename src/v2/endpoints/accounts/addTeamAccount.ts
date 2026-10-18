import {
    addTeamAccount as coreAddTeamAccount,
    type AddTeamAccountData,
    type AddTeamAccountResponse,
    type AddTeamAccountResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createAddTeamAccount(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<AddTeamAccountData>): ReturnType<typeof coreAddTeamAccount> =>
        execute(coreAddTeamAccount, args[0]) as ReturnType<typeof coreAddTeamAccount>;
}

export { coreAddTeamAccount as addTeamAccount };
export type { AddTeamAccountData, AddTeamAccountResponse, AddTeamAccountResponses };
