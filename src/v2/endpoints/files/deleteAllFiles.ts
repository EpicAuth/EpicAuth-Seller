import {
    deleteAllFiles as coreDeleteAllFiles,
    type DeleteAllFilesData,
    type DeleteAllFilesResponse,
    type DeleteAllFilesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteAllFiles(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteAllFilesData>): ReturnType<typeof coreDeleteAllFiles> =>
        execute(coreDeleteAllFiles, args[0]) as ReturnType<typeof coreDeleteAllFiles>;
}

export { coreDeleteAllFiles as deleteAllFiles };
export type { DeleteAllFilesData, DeleteAllFilesResponse, DeleteAllFilesResponses };
