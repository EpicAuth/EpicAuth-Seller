import {
    countSubscriptions as coreCountSubscriptions,
    type CountSubscriptionsData,
    type CountSubscriptionsResponse,
    type CountSubscriptionsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCountSubscriptions(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CountSubscriptionsData>): ReturnType<typeof coreCountSubscriptions> =>
        execute(coreCountSubscriptions, args[0]) as ReturnType<typeof coreCountSubscriptions>;
}

export { coreCountSubscriptions as countSubscriptions };
export type { CountSubscriptionsData, CountSubscriptionsResponse, CountSubscriptionsResponses };
