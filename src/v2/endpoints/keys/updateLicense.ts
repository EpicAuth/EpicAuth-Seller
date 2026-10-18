import {
    updateLicense as coreUpdateLicense,
    type UpdateLicenseData,
    type UpdateLicenseResponse,
    type UpdateLicenseResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUpdateLicense(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UpdateLicenseData>): ReturnType<typeof coreUpdateLicense> =>
        execute(coreUpdateLicense, args[0]) as ReturnType<typeof coreUpdateLicense>;
}

export { coreUpdateLicense as updateLicense };
export type { UpdateLicenseData, UpdateLicenseResponse, UpdateLicenseResponses };
