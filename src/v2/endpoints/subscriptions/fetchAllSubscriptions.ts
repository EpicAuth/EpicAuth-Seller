import {
    fetchAllSubscriptions as coreFetchAllSubscriptions,
    type FetchAllSubscriptionsData,
    type FetchAllSubscriptionsResponse,
    type FetchAllSubscriptionsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createFetchAllSubscriptions(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<FetchAllSubscriptionsData>): ReturnType<typeof coreFetchAllSubscriptions> =>
        execute(coreFetchAllSubscriptions, args[0]) as ReturnType<typeof coreFetchAllSubscriptions>;
}

export { coreFetchAllSubscriptions as fetchAllSubscriptions };
export type { FetchAllSubscriptionsData, FetchAllSubscriptionsResponse, FetchAllSubscriptionsResponses };
