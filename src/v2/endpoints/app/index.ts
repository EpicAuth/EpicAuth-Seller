import type { SellerExecutor } from "../../client/types";

import { createGetAppDetails } from "./getAppDetails";
import { createGetAppStats } from "./getAppStats";
import { createPauseApp } from "./pauseApp";
import { createUnpauseApp } from "./unpauseApp";
import { createCreateAppHash } from "./createAppHash";
import { createResetAppHash } from "./resetAppHash";

export function createApp(execute: SellerExecutor) {
    const getAppDetails = createGetAppDetails(execute);
    const getAppStats = createGetAppStats(execute);
    const pauseApp = createPauseApp(execute);
    const unpauseApp = createUnpauseApp(execute);
    const createAppHash = createCreateAppHash(execute);
    const resetAppHash = createResetAppHash(execute);

    return {
        getDetails: getAppDetails,
        getStats: getAppStats,
        stats: getAppStats,
        pause: pauseApp,
        unpause: unpauseApp,
        createHash: createAppHash,
        resetHash: resetAppHash,
    };
}

export * from "./getAppDetails";
export * from "./getAppStats";
export * from "./pauseApp";
export * from "./unpauseApp";
export * from "./createAppHash";
export * from "./resetAppHash";
