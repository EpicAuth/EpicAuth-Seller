import {
    deleteManyLicenses as coreDeleteManyLicenses,
    type DeleteManyLicensesData,
    type DeleteManyLicensesResponse,
    type DeleteManyLicensesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteManyLicenses(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteManyLicensesData>): ReturnType<typeof coreDeleteManyLicenses> =>
        execute(coreDeleteManyLicenses, args[0]) as ReturnType<typeof coreDeleteManyLicenses>;
}

export { coreDeleteManyLicenses as deleteManyLicenses };
export type { DeleteManyLicensesData, DeleteManyLicensesResponse, DeleteManyLicensesResponses };
