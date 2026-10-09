import type { SellerRequester } from "../../client/types";

import { createAdd } from "./add";
import { addtime } from "./addtime";
import { assignkey } from "./assignkey";
import { ban } from "./ban";
import { del } from "./del";
import { delalllicenses } from "./delalllicenses";
import { delmultiple } from "./delmultiple";
import { delused } from "./delused";
import { delunused } from "./delunused";
import { edit } from "./edit";
import { fetchnote } from "./fetchnote";
import { fetchallkeys } from "./fetchallkeys";
import { getkey } from "./getkey";
import { info } from "./info";
import { setnote } from "./setnote";
import { unban } from "./unban";
import { verify } from "./verify";

export function createKeys(request: SellerRequester) {
    return {
        /**
         * @description Creates a new license key.
         */
        add: createAdd(request),
        /**
         * @description Add time to unused licenses.
         * @param time Number of days to be added
         */
        addTime: addtime(request),
        /**
         * @description assignkey to user
         * @param key
         * @param user
         */
        assignkey: assignkey(request),
        /**
         * @description Edit a license expiry (`edit`).
         */
        edit: edit(request),
        /**
         * @description Delete an existing license (`del`).
         */
        del: del(request),
        /**
         * @description Delete multiple licenses (`delmultiple`).
         */
        delMultiple: delmultiple(request),
        /**
         * @description Ban a license (`ban`).
         */
        ban: ban(request),
        /**
         * @description Unban a license (`unban`).
         */
        unban: unban(request),
        /**
         * @description Verify a license exists (`verify`).
         */
        verify: verify(request),
        /**
         * @description Retrieve license information (`info`).
         */
        info: info(request),
        /**
         * @description Retrieve the license assigned to a user (`getkey`).
         */
        getKey: getkey(request),
        /**
         * @description Retrieve all licenses (`fetchallkeys`).
         */
        fetchAll: fetchallkeys(request),
        /**
         * @description Delete all licenses (`delalllicenses`).
         */
        delAll: delalllicenses(request),
        /**
         * @description Delete all used licenses (`delused`).
         */
        delUsed: delused(request),
        /**
         * @description Delete all unused licenses (`delunused`).
         */
        delUnused: delunused(request),
        /**
         * @description Set a note on an existing license (`setnote`).
         */
        setNote: setnote(request),
        /**
         * @description Retrieve the note of a license (`fetchnote`).
         */
        getNote: fetchnote(request),
    };
}
