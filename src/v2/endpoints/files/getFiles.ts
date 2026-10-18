import {
    getFiles as coreGetFiles,
    type GetFilesData,
    type GetFilesResponse,
    type GetFilesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetFiles(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetFilesData>): ReturnType<typeof coreGetFiles> =>
        execute(coreGetFiles, args[0]) as ReturnType<typeof coreGetFiles>;
}

export { coreGetFiles as getFiles };
export type { GetFilesData, GetFilesResponse, GetFilesResponses };
