import {
    clearChannelMessages as coreClearChannelMessages,
    type ClearChannelMessagesData,
    type ClearChannelMessagesResponse,
    type ClearChannelMessagesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createClearChannelMessages(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<ClearChannelMessagesData>): ReturnType<typeof coreClearChannelMessages> =>
        execute(coreClearChannelMessages, args[0]) as ReturnType<typeof coreClearChannelMessages>;
}

export { coreClearChannelMessages as clearChannelMessages };
export type { ClearChannelMessagesData, ClearChannelMessagesResponse, ClearChannelMessagesResponses };
