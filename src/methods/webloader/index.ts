import type { SellerRequester } from "../../client/types";

import { addbutton } from "./addbutton";
import { delbutton } from "./delbutton";
import { fetchallbuttons } from "./fetchallbuttons";

export function createWebloader(request: SellerRequester) {
    return {
        /** @description Create a new web loader button (`addbutton`). */
        add: addbutton(request),
        /** @description Delete a web loader button (`delbutton`). */
        del: delbutton(request),
        /** @description Retrieve all web loader buttons (`fetchallbuttons`). */
        fetchAll: fetchallbuttons(request),
    };
}
