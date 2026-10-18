import {
    deleteUnusedLicenses as coreDeleteUnusedLicenses,
    type DeleteUnusedLicensesData,
    type DeleteUnusedLicensesResponse,
    type DeleteUnusedLicensesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteUnusedLicenses(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteUnusedLicensesData>): ReturnType<typeof coreDeleteUnusedLicenses> =>
        execute(coreDeleteUnusedLicenses, args[0]) as ReturnType<typeof coreDeleteUnusedLicenses>;
}

export { coreDeleteUnusedLicenses as deleteUnusedLicenses };
export type { DeleteUnusedLicensesData, DeleteUnusedLicensesResponse, DeleteUnusedLicensesResponses };
