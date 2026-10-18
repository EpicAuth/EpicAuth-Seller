import type { SellerRequester } from "../../client/types";

import { fetchallsessions } from "./fetchallsessions";
import { kill } from "./kill";
import { killall } from "./killall";

export function createSessions(request: SellerRequester) {
    return {
        /** @description End a selected session (`kill`). */
        kill: kill(request),
        /** @description End all sessions (`killall`). */
        killAll: killall(request),
        /** @description Retrieve all sessions (`fetchallsessions`). */
        fetchAll: fetchallsessions(request),
    };
}
