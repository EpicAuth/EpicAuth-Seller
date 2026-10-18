import {
    getChannelChats as coreGetChannelChats,
    type GetChannelChatsData,
    type GetChannelChatsResponse,
    type GetChannelChatsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetChannelChats(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetChannelChatsData>): ReturnType<typeof coreGetChannelChats> =>
        execute(coreGetChannelChats, args[0]) as ReturnType<typeof coreGetChannelChats>;
}

export { coreGetChannelChats as getChannelChats };
export type { GetChannelChatsData, GetChannelChatsResponse, GetChannelChatsResponses };
