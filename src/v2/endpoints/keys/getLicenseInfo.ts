import {
    getLicenseInfo as coreGetLicenseInfo,
    type GetLicenseInfoData,
    type GetLicenseInfoResponse,
    type GetLicenseInfoResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetLicenseInfo(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetLicenseInfoData>): ReturnType<typeof coreGetLicenseInfo> =>
        execute(coreGetLicenseInfo, args[0]) as ReturnType<typeof coreGetLicenseInfo>;
}

export { coreGetLicenseInfo as getLicenseInfo };
export type { GetLicenseInfoData, GetLicenseInfoResponse, GetLicenseInfoResponses };
