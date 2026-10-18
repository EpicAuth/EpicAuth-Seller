import {
    banLicense as coreBanLicense,
    type BanLicenseData,
    type BanLicenseResponse,
    type BanLicenseResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createBanLicense(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<BanLicenseData>): ReturnType<typeof coreBanLicense> =>
        execute(coreBanLicense, args[0]) as ReturnType<typeof coreBanLicense>;
}

export { coreBanLicense as banLicense };
export type { BanLicenseData, BanLicenseResponse, BanLicenseResponses };
