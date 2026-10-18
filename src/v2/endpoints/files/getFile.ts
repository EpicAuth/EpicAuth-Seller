import {
    getFile as coreGetFile,
    type GetFileData,
    type GetFileResponse,
    type GetFileResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetFile(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetFileData>): ReturnType<typeof coreGetFile> =>
        execute(coreGetFile, args[0]) as ReturnType<typeof coreGetFile>;
}

export { coreGetFile as getFile };
export type { GetFileData, GetFileResponse, GetFileResponses };
