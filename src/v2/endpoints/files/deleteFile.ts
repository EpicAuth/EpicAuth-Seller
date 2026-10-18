import {
    deleteFile as coreDeleteFile,
    type DeleteFileData,
    type DeleteFileResponse,
    type DeleteFileResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteFile(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteFileData>): ReturnType<typeof coreDeleteFile> =>
        execute(coreDeleteFile, args[0]) as ReturnType<typeof coreDeleteFile>;
}

export { coreDeleteFile as deleteFile };
export type { DeleteFileData, DeleteFileResponse, DeleteFileResponses };
