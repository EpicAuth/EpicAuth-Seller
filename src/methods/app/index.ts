import type { SellerRequester } from "../../client/types";

import { createStats } from "./stats";
import { addhash } from "./addhash";
import { appdetails } from "./appdetails";
import { pauseapp } from "./pauseapp";
import { resethash } from "./resethash";
import { unpauseapp } from "./unpauseapp";

export function createApp(request: SellerRequester) {
    return {
        /**
         * @description Get app stats.
         *
         * @returns App statistics.
         */
        stats: createStats(request),
        /**
         * @description Retrieve app details (`appdetails`).
         */
        details: appdetails(request),
        /**
         * @description Pause the app (`pauseapp`).
         */
        pause: pauseapp(request),
        /**
         * @description Unpause the app (`unpauseapp`).
         */
        unpause: unpauseapp(request),
        /**
         * @description Add an application hash (`addhash`).
         */
        addHash: addhash(request),
        /**
         * @description Reset the application hash (`resethash`).
         */
        resetHash: resethash(request),
    };
}
