import {
    verifyLicense as coreVerifyLicense,
    type VerifyLicenseData,
    type VerifyLicenseResponse,
    type VerifyLicenseResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createVerifyLicense(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<VerifyLicenseData>): ReturnType<typeof coreVerifyLicense> =>
        execute(coreVerifyLicense, args[0]) as ReturnType<typeof coreVerifyLicense>;
}

export { coreVerifyLicense as verifyLicense };
export type { VerifyLicenseData, VerifyLicenseResponse, VerifyLicenseResponses };
