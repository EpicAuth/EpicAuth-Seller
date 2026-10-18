import {
    createWhitelist as coreCreateWhitelist,
    type CreateWhitelistData,
    type CreateWhitelistResponse,
    type CreateWhitelistResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateWhitelist(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateWhitelistData>): ReturnType<typeof coreCreateWhitelist> =>
        execute(coreCreateWhitelist, args[0]) as ReturnType<typeof coreCreateWhitelist>;
}

export { coreCreateWhitelist as createWhitelist };
export type { CreateWhitelistData, CreateWhitelistResponse, CreateWhitelistResponses };
