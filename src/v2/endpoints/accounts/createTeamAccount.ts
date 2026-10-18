import {
    createTeamAccount as coreCreateTeamAccount,
    type CreateTeamAccountData,
    type CreateTeamAccountResponse,
    type CreateTeamAccountResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateTeamAccount(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateTeamAccountData>): ReturnType<typeof coreCreateTeamAccount> =>
        execute(coreCreateTeamAccount, args[0]) as ReturnType<typeof coreCreateTeamAccount>;
}

export { coreCreateTeamAccount as createTeamAccount };
export type { CreateTeamAccountData, CreateTeamAccountResponse, CreateTeamAccountResponses };
