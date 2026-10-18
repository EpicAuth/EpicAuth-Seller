import type { SellerRequester } from "../../client/types";

import { addchannel } from "./addchannel";
import { clearchannel } from "./clearchannel";
import { delchannel } from "./delchannel";
import { editchan } from "./editchan";
import { fetchallchats } from "./fetchallchats";
import { fetchallmutes } from "./fetchallmutes";
import { muteuser } from "./muteuser";
import { unmuteuser } from "./unmuteuser";

export function createChannels(request: SellerRequester) {
    return {
        /** @description Create a new chat channel (`addchannel`). */
        add: addchannel(request),
        /** @description Delete an existing chat channel (`delchannel`). */
        del: delchannel(request),
        /** @description Delete channel messages (`clearchannel`). */
        clear: clearchannel(request),
        /** @description Edit an existing chat channel (`editchan`). */
        edit: editchan(request),
        /** @description Mute a user (`muteuser`). */
        mute: muteuser(request),
        /** @description Unmute a user (`unmuteuser`). */
        unmute: unmuteuser(request),
        /** @description Retrieve all chat channels (`fetchallchats`). */
        fetchAll: fetchallchats(request),
        /** @description Retrieve all mutes (`fetchallmutes`). */
        fetchAllMutes: fetchallmutes(request),
    };
}
