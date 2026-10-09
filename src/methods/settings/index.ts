import type { SellerRequester } from "../../client/types";

import { getsettings } from "./getsettings";
import { updatesettings } from "./updatesettings";

export function createSettings(request: SellerRequester) {
    return {
        /**
         * @description Retrieve the current application settings (`getsettings`).
         */
        getSettings: getsettings(request),
        /**
         * @description Update application settings (`updatesettings`).
         */
        updateSettings: updatesettings(request),
    };
}
