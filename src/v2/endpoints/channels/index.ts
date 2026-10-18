import type { SellerExecutor } from "../../client/types";

import { createGetChannelChats } from "./getChannelChats";
import { createCreateChannel } from "./createChannel";
import { createUpdateChannel } from "./updateChannel";
import { createDeleteChannel } from "./deleteChannel";
import { createClearChannelMessages } from "./clearChannelMessages";
import { createGetMutedUsers } from "./getMutedUsers";
import { createMuteUser } from "./muteUser";
import { createUnmuteUser } from "./unmuteUser";

export function createChannels(execute: SellerExecutor) {
    const getChannelChats = createGetChannelChats(execute);
    const createChannel = createCreateChannel(execute);
    const updateChannel = createUpdateChannel(execute);
    const deleteChannel = createDeleteChannel(execute);
    const clearChannelMessages = createClearChannelMessages(execute);
    const getMutedUsers = createGetMutedUsers(execute);
    const muteUser = createMuteUser(execute);
    const unmuteUser = createUnmuteUser(execute);

    return {
        getChats: getChannelChats,
        create: createChannel,
        update: updateChannel,
        delete: deleteChannel,
        clearMessages: clearChannelMessages,
        getMutedUsers,
        muteUser,
        unmuteUser,
    };
}

export * from "./getChannelChats";
export * from "./createChannel";
export * from "./updateChannel";
export * from "./deleteChannel";
export * from "./clearChannelMessages";
export * from "./getMutedUsers";
export * from "./muteUser";
export * from "./unmuteUser";
