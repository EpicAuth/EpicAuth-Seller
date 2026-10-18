import {
    deleteLicense as coreDeleteLicense,
    type DeleteLicenseData,
    type DeleteLicenseResponse,
    type DeleteLicenseResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteLicense(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteLicenseData>): ReturnType<typeof coreDeleteLicense> =>
        execute(coreDeleteLicense, args[0]) as ReturnType<typeof coreDeleteLicense>;
}

export { coreDeleteLicense as deleteLicense };
export type { DeleteLicenseData, DeleteLicenseResponse, DeleteLicenseResponses };
