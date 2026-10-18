import type { SellerRequester } from "../../client/types";

import { addwebhook } from "./addwebhook";
import { delallwebhooks } from "./delallwebhooks";
import { fetchallwebhooks } from "./fetchallwebhooks";

export function createWebhooks(request: SellerRequester) {
    return {
        /** @description Create a new webhook (`addwebhook`). */
        add: addwebhook(request),
        /** @description Delete all webhooks (`delallwebhooks`). */
        delAll: delallwebhooks(request),
        /** @description Retrieve all webhooks (`fetchallwebhooks`). */
        fetchAll: fetchallwebhooks(request),
    };
}
