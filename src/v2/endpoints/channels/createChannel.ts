import {
    createChannel as coreCreateChannel,
    type CreateChannelData,
    type CreateChannelResponse,
    type CreateChannelResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateChannel(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateChannelData>): ReturnType<typeof coreCreateChannel> =>
        execute(coreCreateChannel, args[0]) as ReturnType<typeof coreCreateChannel>;
}

export { coreCreateChannel as createChannel };
export type { CreateChannelData, CreateChannelResponse, CreateChannelResponses };
