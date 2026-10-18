import {
    getSubscriptionCount as coreGetSubscriptionCount,
    type GetSubscriptionCountData,
    type GetSubscriptionCountResponse,
    type GetSubscriptionCountResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetSubscriptionCount(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetSubscriptionCountData>): ReturnType<typeof coreGetSubscriptionCount> =>
        execute(coreGetSubscriptionCount, args[0]) as ReturnType<typeof coreGetSubscriptionCount>;
}

export { coreGetSubscriptionCount as getSubscriptionCount };
export type { GetSubscriptionCountData, GetSubscriptionCountResponse, GetSubscriptionCountResponses };
