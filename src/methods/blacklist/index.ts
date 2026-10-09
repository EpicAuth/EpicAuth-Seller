import type { SellerRequester } from "../../client/types";

import { black } from "./black";
import { delblack } from "./delblack";
import { delblacks } from "./delblacks";
import { fetchallblacks } from "./fetchallblacks";

export function createBlacklist(request: SellerRequester) {
    return {
        /** @description Create a new blacklist entry (`black`). */
        add: black(request),
        /** @description Delete an existing blacklist entry (`delblack`). */
        del: delblack(request),
        /** @description Delete all blacklists (`delblacks`). */
        delAll: delblacks(request),
        /** @description Retrieve all blacklists (`fetchallblacks`). */
        fetchAll: fetchallblacks(request),
    };
}
