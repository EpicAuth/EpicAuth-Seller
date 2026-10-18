import {
    unbanLicense as coreUnbanLicense,
    type UnbanLicenseData,
    type UnbanLicenseResponse,
    type UnbanLicenseResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUnbanLicense(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UnbanLicenseData>): ReturnType<typeof coreUnbanLicense> =>
        execute(coreUnbanLicense, args[0]) as ReturnType<typeof coreUnbanLicense>;
}

export { coreUnbanLicense as unbanLicense };
export type { UnbanLicenseData, UnbanLicenseResponse, UnbanLicenseResponses };
