import {
    deleteAllBlacklists as coreDeleteAllBlacklists,
    type DeleteAllBlacklistsData,
    type DeleteAllBlacklistsResponse,
    type DeleteAllBlacklistsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteAllBlacklists(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteAllBlacklistsData>): ReturnType<typeof coreDeleteAllBlacklists> =>
        execute(coreDeleteAllBlacklists, args[0]) as ReturnType<typeof coreDeleteAllBlacklists>;
}

export { coreDeleteAllBlacklists as deleteAllBlacklists };
export type { DeleteAllBlacklistsData, DeleteAllBlacklistsResponse, DeleteAllBlacklistsResponses };
