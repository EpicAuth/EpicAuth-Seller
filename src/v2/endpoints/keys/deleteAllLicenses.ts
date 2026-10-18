import {
    deleteAllLicenses as coreDeleteAllLicenses,
    type DeleteAllLicensesData,
    type DeleteAllLicensesResponse,
    type DeleteAllLicensesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteAllLicenses(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteAllLicensesData>): ReturnType<typeof coreDeleteAllLicenses> =>
        execute(coreDeleteAllLicenses, args[0]) as ReturnType<typeof coreDeleteAllLicenses>;
}

export { coreDeleteAllLicenses as deleteAllLicenses };
export type { DeleteAllLicensesData, DeleteAllLicensesResponse, DeleteAllLicensesResponses };
