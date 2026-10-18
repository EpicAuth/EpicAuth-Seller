import {
    pauseSubscription as corePauseSubscription,
    type PauseSubscriptionData,
    type PauseSubscriptionResponse,
    type PauseSubscriptionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createPauseSubscription(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<PauseSubscriptionData>): ReturnType<typeof corePauseSubscription> =>
        execute(corePauseSubscription, args[0]) as ReturnType<typeof corePauseSubscription>;
}

export { corePauseSubscription as pauseSubscription };
export type { PauseSubscriptionData, PauseSubscriptionResponse, PauseSubscriptionResponses };
