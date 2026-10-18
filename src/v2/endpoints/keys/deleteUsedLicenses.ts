import {
    deleteUsedLicenses as coreDeleteUsedLicenses,
    type DeleteUsedLicensesData,
    type DeleteUsedLicensesResponse,
    type DeleteUsedLicensesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteUsedLicenses(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteUsedLicensesData>): ReturnType<typeof coreDeleteUsedLicenses> =>
        execute(coreDeleteUsedLicenses, args[0]) as ReturnType<typeof coreDeleteUsedLicenses>;
}

export { coreDeleteUsedLicenses as deleteUsedLicenses };
export type { DeleteUsedLicensesData, DeleteUsedLicensesResponse, DeleteUsedLicensesResponses };
