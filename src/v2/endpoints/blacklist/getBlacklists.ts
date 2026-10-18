import {
    getBlacklists as coreGetBlacklists,
    type GetBlacklistsData,
    type GetBlacklistsResponse,
    type GetBlacklistsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetBlacklists(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetBlacklistsData>): ReturnType<typeof coreGetBlacklists> =>
        execute(coreGetBlacklists, args[0]) as ReturnType<typeof coreGetBlacklists>;
}

export { coreGetBlacklists as getBlacklists };
export type { GetBlacklistsData, GetBlacklistsResponse, GetBlacklistsResponses };
