import {
    subtractLicense as coreSubtractLicense,
    type SubtractLicenseData,
    type SubtractLicenseResponse,
    type SubtractLicenseResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createSubtractLicense(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<SubtractLicenseData>): ReturnType<typeof coreSubtractLicense> =>
        execute(coreSubtractLicense, args[0]) as ReturnType<typeof coreSubtractLicense>;
}

export { coreSubtractLicense as subtractLicense };
export type { SubtractLicenseData, SubtractLicenseResponse, SubtractLicenseResponses };
