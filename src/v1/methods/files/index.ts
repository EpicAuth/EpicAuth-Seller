import type { SellerRequester } from "../../client/types";

import { delallfiles } from "./delallfiles";
import { delfile } from "./delfile";
import { editfile } from "./editfile";
import { fetchallfiles } from "./fetchallfiles";
import { fetchfile } from "./fetchfile";
import { upload } from "./upload";

export function createFiles(request: SellerRequester) {
    return {
        /** @description Upload a new file (`upload`). */
        upload: upload(request),
        /** @description Retrieve an existing file (`fetchfile`). */
        get: fetchfile(request),
        /** @description Edit an existing file (`editfile`). */
        edit: editfile(request),
        /** @description Delete an existing file (`delfile`). */
        del: delfile(request),
        /** @description Delete all files (`delallfiles`). */
        delAll: delallfiles(request),
        /** @description Retrieve all existing files (`fetchallfiles`). */
        fetchAll: fetchallfiles(request),
    };
}
