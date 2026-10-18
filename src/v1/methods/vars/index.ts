import type { SellerRequester } from "../../client/types";

import { addvar } from "./addvar";
import { delallvars } from "./delallvars";
import { delvar } from "./delvar";
import { editvar } from "./editvar";
import { fetchallvars } from "./fetchallvars";
import { retrvvar } from "./retrvvar";

export function createVars(request: SellerRequester) {
    return {
        /**
         * @description create globla variable
         */
        create: addvar(request),
        /**
         * @description Edit an existing global variable (`editvar`).
         */
        edit: editvar(request),
        /**
         * @description Retrieve an existing global variable (`retrvvar`).
         */
        get: retrvvar(request),
        /**
         * @description Delete a global variable (`delvar`).
         */
        del: delvar(request),
        /**
         * @description Delete all global variables (`delallvars`).
         */
        delAll: delallvars(request),
        /**
         * @description Retrieve all global variables (`fetchallvars`).
         */
        fetchAll: fetchallvars(request),
    };
}
