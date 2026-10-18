import {
    createBlacklist as coreCreateBlacklist,
    type CreateBlacklistData,
    type CreateBlacklistResponse,
    type CreateBlacklistResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateBlacklist(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateBlacklistData>): ReturnType<typeof coreCreateBlacklist> =>
        execute(coreCreateBlacklist, args[0]) as ReturnType<typeof coreCreateBlacklist>;
}

export { coreCreateBlacklist as createBlacklist };
export type { CreateBlacklistData, CreateBlacklistResponse, CreateBlacklistResponses };
