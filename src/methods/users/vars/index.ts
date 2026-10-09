import type { SellerRequester } from "../../../client/types";

import { deluservar } from "./deluservar";
import { fetchalluservars } from "./fetchalluservars";
import { getvar } from "./getvar";
import { massUserVarDelete } from "./mass-user-var-delete";
import { setvar } from "./setvar";

export function createUserVars(request: SellerRequester) {
    const setVar = setvar(request);
    const getVar = getvar(request);

    return {
        /**
         * @description set user variable (`setvar`)
         */
        setVar,
        /**
         * @description get user variable (`getvar`)
         */
        getVar,
        /**
         * @description delete a user variable (`deluservar`)
         */
        del: deluservar(request),
        /**
         * @description delete all user variables with the given variable name (`massUserVarDelete`)
         */
        massDelete: massUserVarDelete(request),
        /**
         * @description retrieve all user variables (`fetchalluservars`)
         */
        fetchAll: fetchalluservars(request),
        /**
         * @description set user variable (`setvar`)
         * @deprecated use `setVar` instead
         */
        set: setVar,
        /**
         * @description get user variable (`getvar`)
         * @deprecated use `getVar` instead
         */
        get: getVar,
    };
}
