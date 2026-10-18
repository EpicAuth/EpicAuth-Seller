import {
    getAppSettings as coreGetAppSettings,
    type GetAppSettingsData,
    type GetAppSettingsResponse,
    type GetAppSettingsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetAppSettings(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetAppSettingsData>): ReturnType<typeof coreGetAppSettings> =>
        execute(coreGetAppSettings, args[0]) as ReturnType<typeof coreGetAppSettings>;
}

export { coreGetAppSettings as getAppSettings };
export type { GetAppSettingsData, GetAppSettingsResponse, GetAppSettingsResponses };
