import {
    deleteWhitelist as coreDeleteWhitelist,
    type DeleteWhitelistData,
    type DeleteWhitelistResponse,
    type DeleteWhitelistResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteWhitelist(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteWhitelistData>): ReturnType<typeof coreDeleteWhitelist> =>
        execute(coreDeleteWhitelist, args[0]) as ReturnType<typeof coreDeleteWhitelist>;
}

export { coreDeleteWhitelist as deleteWhitelist };
export type { DeleteWhitelistData, DeleteWhitelistResponse, DeleteWhitelistResponses };
