import type { SellerExecutor } from "../../client/types";

import { createGetFiles } from "./getFiles";
import { createGetFile } from "./getFile";
import { createUploadFile } from "./uploadFile";
import { createUpdateFile } from "./updateFile";
import { createDeleteFile } from "./deleteFile";
import { createDeleteAllFiles } from "./deleteAllFiles";

export function createFiles(execute: SellerExecutor) {
    const getFiles = createGetFiles(execute);
    const getFile = createGetFile(execute);
    const uploadFile = createUploadFile(execute);
    const updateFile = createUpdateFile(execute);
    const deleteFile = createDeleteFile(execute);
    const deleteAllFiles = createDeleteAllFiles(execute);

    return {
        getAll: getFiles,
        get: getFile,
        upload: uploadFile,
        update: updateFile,
        delete: deleteFile,
        deleteAll: deleteAllFiles,
    };
}

export * from "./getFiles";
export * from "./getFile";
export * from "./uploadFile";
export * from "./updateFile";
export * from "./deleteFile";
export * from "./deleteAllFiles";
