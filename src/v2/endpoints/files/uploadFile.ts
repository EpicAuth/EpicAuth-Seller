import {
    uploadFile as coreUploadFile,
    type UploadFileData,
    type UploadFileResponse,
    type UploadFileResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUploadFile(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UploadFileData>): ReturnType<typeof coreUploadFile> =>
        execute(coreUploadFile, args[0]) as ReturnType<typeof coreUploadFile>;
}

export { coreUploadFile as uploadFile };
export type { UploadFileData, UploadFileResponse, UploadFileResponses };
