import {
    getSubscriptions as coreGetSubscriptions,
    type GetSubscriptionsData,
    type GetSubscriptionsResponse,
    type GetSubscriptionsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetSubscriptions(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetSubscriptionsData>): ReturnType<typeof coreGetSubscriptions> =>
        execute(coreGetSubscriptions, args[0]) as ReturnType<typeof coreGetSubscriptions>;
}

export { coreGetSubscriptions as getSubscriptions };
export type { GetSubscriptionsData, GetSubscriptionsResponse, GetSubscriptionsResponses };
