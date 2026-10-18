import {
    deleteChannel as coreDeleteChannel,
    type DeleteChannelData,
    type DeleteChannelResponse,
    type DeleteChannelResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteChannel(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteChannelData>): ReturnType<typeof coreDeleteChannel> =>
        execute(coreDeleteChannel, args[0]) as ReturnType<typeof coreDeleteChannel>;
}

export { coreDeleteChannel as deleteChannel };
export type { DeleteChannelData, DeleteChannelResponse, DeleteChannelResponses };
