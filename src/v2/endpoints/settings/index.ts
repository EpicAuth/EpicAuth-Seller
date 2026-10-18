import type { SellerExecutor } from "../../client/types";

import { createGetAppSettings } from "./getAppSettings";
import { createUpdateAppSettings } from "./updateAppSettings";

export function createSettings(execute: SellerExecutor) {
    const getAppSettings = createGetAppSettings(execute);
    const updateAppSettings = createUpdateAppSettings(execute);

    return {
        get: getAppSettings,
        update: updateAppSettings,
    };
}

export * from "./getAppSettings";
export * from "./updateAppSettings";
