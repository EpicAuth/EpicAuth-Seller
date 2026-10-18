import type { SellerExecutor } from "../../client/types";

import { createGetSessions } from "./getSessions";
import { createKillSession } from "./killSession";
import { createKillAllSessions } from "./killAllSessions";

export function createSessions(execute: SellerExecutor) {
    const getSessions = createGetSessions(execute);
    const killSession = createKillSession(execute);
    const killAllSessions = createKillAllSessions(execute);

    return {
        getAll: getSessions,
        kill: killSession,
        killAll: killAllSessions,
    };
}

export * from "./getSessions";
export * from "./killSession";
export * from "./killAllSessions";
