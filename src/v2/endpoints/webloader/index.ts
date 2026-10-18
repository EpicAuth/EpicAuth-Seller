import type { SellerExecutor } from "../../client/types";

import { createGetWebloaderButtons } from "./getWebloaderButtons";
import { createCreateWebloaderButton } from "./createWebloaderButton";
import { createDeleteWebloaderButton } from "./deleteWebloaderButton";

export function createWebloader(execute: SellerExecutor) {
    const getWebloaderButtons = createGetWebloaderButtons(execute);
    const createWebloaderButton = createCreateWebloaderButton(execute);
    const deleteWebloaderButton = createDeleteWebloaderButton(execute);

    return {
        getAll: getWebloaderButtons,
        create: createWebloaderButton,
        delete: deleteWebloaderButton,
    };
}

export * from "./getWebloaderButtons";
export * from "./createWebloaderButton";
export * from "./deleteWebloaderButton";
