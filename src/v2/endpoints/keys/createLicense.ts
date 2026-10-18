import {
    createLicense as coreCreateLicense,
    type CreateLicenseData,
    type CreateLicenseResponse,
    type CreateLicenseResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateLicense(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateLicenseData>): ReturnType<typeof coreCreateLicense> =>
        execute(coreCreateLicense, args[0]) as ReturnType<typeof coreCreateLicense>;
}

export { coreCreateLicense as createLicense };
export type { CreateLicenseData, CreateLicenseResponse, CreateLicenseResponses };
