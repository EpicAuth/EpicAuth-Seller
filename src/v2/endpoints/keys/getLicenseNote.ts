import {
    getLicenseNote as coreGetLicenseNote,
    type GetLicenseNoteData,
    type GetLicenseNoteResponse,
    type GetLicenseNoteResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetLicenseNote(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetLicenseNoteData>): ReturnType<typeof coreGetLicenseNote> =>
        execute(coreGetLicenseNote, args[0]) as ReturnType<typeof coreGetLicenseNote>;
}

export { coreGetLicenseNote as getLicenseNote };
export type { GetLicenseNoteData, GetLicenseNoteResponse, GetLicenseNoteResponses };
