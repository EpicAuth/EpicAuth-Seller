import type { SellerRequester } from "../../client/types";

import { dellogs } from "./dellogs";
import { fetchalllogs } from "./fetchalllogs";

export function createLogs(request: SellerRequester) {
    return {
        /** @description Retrieve all logs (`fetchalllogs`). */
        fetchAll: fetchalllogs(request),
        /** @description Delete all logs (`dellogs`). */
        delAll: dellogs(request),
    };
}
