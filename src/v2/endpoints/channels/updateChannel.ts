import {
    updateChannel as coreUpdateChannel,
    type UpdateChannelData,
    type UpdateChannelResponse,
    type UpdateChannelResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUpdateChannel(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UpdateChannelData>): ReturnType<typeof coreUpdateChannel> =>
        execute(coreUpdateChannel, args[0]) as ReturnType<typeof coreUpdateChannel>;
}

export { coreUpdateChannel as updateChannel };
export type { UpdateChannelData, UpdateChannelResponse, UpdateChannelResponses };
