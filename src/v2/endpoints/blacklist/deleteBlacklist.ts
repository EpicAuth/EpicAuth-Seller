import {
    deleteBlacklist as coreDeleteBlacklist,
    type DeleteBlacklistData,
    type DeleteBlacklistResponse,
    type DeleteBlacklistResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteBlacklist(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteBlacklistData>): ReturnType<typeof coreDeleteBlacklist> =>
        execute(coreDeleteBlacklist, args[0]) as ReturnType<typeof coreDeleteBlacklist>;
}

export { coreDeleteBlacklist as deleteBlacklist };
export type { DeleteBlacklistData, DeleteBlacklistResponse, DeleteBlacklistResponses };
