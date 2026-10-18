import {
    killAllSessions as coreKillAllSessions,
    type KillAllSessionsData,
    type KillAllSessionsResponse,
    type KillAllSessionsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createKillAllSessions(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<KillAllSessionsData>): ReturnType<typeof coreKillAllSessions> =>
        execute(coreKillAllSessions, args[0]) as ReturnType<typeof coreKillAllSessions>;
}

export { coreKillAllSessions as killAllSessions };
export type { KillAllSessionsData, KillAllSessionsResponse, KillAllSessionsResponses };
