import {
    extendUnusedLicenses as coreExtendUnusedLicenses,
    type ExtendUnusedLicensesData,
    type ExtendUnusedLicensesResponse,
    type ExtendUnusedLicensesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createExtendUnusedLicenses(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<ExtendUnusedLicensesData>): ReturnType<typeof coreExtendUnusedLicenses> =>
        execute(coreExtendUnusedLicenses, args[0]) as ReturnType<typeof coreExtendUnusedLicenses>;
}

export { coreExtendUnusedLicenses as extendUnusedLicenses };
export type { ExtendUnusedLicensesData, ExtendUnusedLicensesResponse, ExtendUnusedLicensesResponses };
