import type { SellerRequester } from "../../client/types";

import { addWhite } from "./add-white";
import { delWhite } from "./del-white";

export function createWhitelist(request: SellerRequester) {
    return {
        /** @description Add an IP to the whitelist (`addWhite`). */
        add: addWhite(request),
        /** @description Delete an existing whitelisted IP (`delWhite`). */
        del: delWhite(request),
    };
}
