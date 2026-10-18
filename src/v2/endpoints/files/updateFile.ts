import {
    updateFile as coreUpdateFile,
    type UpdateFileData,
    type UpdateFileResponse,
    type UpdateFileResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUpdateFile(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UpdateFileData>): ReturnType<typeof coreUpdateFile> =>
        execute(coreUpdateFile, args[0]) as ReturnType<typeof coreUpdateFile>;
}

export { coreUpdateFile as updateFile };
export type { UpdateFileData, UpdateFileResponse, UpdateFileResponses };
