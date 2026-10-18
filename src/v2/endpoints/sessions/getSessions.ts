import {
    getSessions as coreGetSessions,
    type GetSessionsData,
    type GetSessionsResponse,
    type GetSessionsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetSessions(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetSessionsData>): ReturnType<typeof coreGetSessions> =>
        execute(coreGetSessions, args[0]) as ReturnType<typeof coreGetSessions>;
}

export { coreGetSessions as getSessions };
export type { GetSessionsData, GetSessionsResponse, GetSessionsResponses };
