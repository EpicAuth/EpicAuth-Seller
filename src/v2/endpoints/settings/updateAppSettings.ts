import {
    updateAppSettings as coreUpdateAppSettings,
    type UpdateAppSettingsData,
    type UpdateAppSettingsResponse,
    type UpdateAppSettingsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUpdateAppSettings(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UpdateAppSettingsData>): ReturnType<typeof coreUpdateAppSettings> =>
        execute(coreUpdateAppSettings, args[0]) as ReturnType<typeof coreUpdateAppSettings>;
}

export { coreUpdateAppSettings as updateAppSettings };
export type { UpdateAppSettingsData, UpdateAppSettingsResponse, UpdateAppSettingsResponses };
