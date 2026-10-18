import {
    pauseAppSubscription as corePauseAppSubscription,
    type PauseAppSubscriptionData,
    type PauseAppSubscriptionResponse,
    type PauseAppSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createPauseAppSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<PauseAppSubscriptionData>): ReturnType<typeof corePauseAppSubscription> =>
        execute(corePauseAppSubscription, args[0]) as ReturnType<typeof corePauseAppSubscription>;
}

export { corePauseAppSubscription as pauseAppSubscription };
export type { PauseAppSubscriptionData, PauseAppSubscriptionResponse, PauseAppSubscriptionResponses };
