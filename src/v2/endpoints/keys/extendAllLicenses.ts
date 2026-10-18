import {
    extendAllLicenses as coreExtendAllLicenses,
    type ExtendAllLicensesData,
    type ExtendAllLicensesResponse,
    type ExtendAllLicensesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createExtendAllLicenses(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<ExtendAllLicensesData>): ReturnType<typeof coreExtendAllLicenses> =>
        execute(coreExtendAllLicenses, args[0]) as ReturnType<typeof coreExtendAllLicenses>;
}

export { coreExtendAllLicenses as extendAllLicenses };
export type { ExtendAllLicensesData, ExtendAllLicensesResponse, ExtendAllLicensesResponses };
