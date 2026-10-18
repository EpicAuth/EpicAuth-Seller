import {
    getLicenses as coreGetLicenses,
    type GetLicensesData,
    type GetLicensesResponse,
    type GetLicensesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetLicenses(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetLicensesData>): ReturnType<typeof coreGetLicenses> =>
        execute(coreGetLicenses, args[0]) as ReturnType<typeof coreGetLicenses>;
}

export { coreGetLicenses as getLicenses };
export type { GetLicensesData, GetLicensesResponse, GetLicensesResponses };
