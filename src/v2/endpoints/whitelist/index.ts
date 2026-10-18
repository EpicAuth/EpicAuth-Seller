import type { SellerExecutor } from "../../client/types";

import { createCreateWhitelist } from "./createWhitelist";
import { createDeleteWhitelist } from "./deleteWhitelist";

export function createWhitelist(execute: SellerExecutor) {
    const createWhitelist = createCreateWhitelist(execute);
    const deleteWhitelist = createDeleteWhitelist(execute);

    return {
        create: createWhitelist,
        delete: deleteWhitelist,
    };
}

export * from "./createWhitelist";
export * from "./deleteWhitelist";
