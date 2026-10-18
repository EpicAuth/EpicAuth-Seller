import type { SellerExecutor } from "../../client/types";

import { createGetWebhooks } from "./getWebhooks";
import { createCreateWebhook } from "./createWebhook";
import { createDeleteAllWebhooks } from "./deleteAllWebhooks";

export function createWebhooks(execute: SellerExecutor) {
    const getWebhooks = createGetWebhooks(execute);
    const createWebhook = createCreateWebhook(execute);
    const deleteAllWebhooks = createDeleteAllWebhooks(execute);

    return {
        getAll: getWebhooks,
        create: createWebhook,
        deleteAll: deleteAllWebhooks,
    };
}

export * from "./getWebhooks";
export * from "./createWebhook";
export * from "./deleteAllWebhooks";
