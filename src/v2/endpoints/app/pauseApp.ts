import {
    pauseApp as corePauseApp,
    type PauseAppData,
    type PauseAppResponse,
    type PauseAppResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createPauseApp(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<PauseAppData>): ReturnType<typeof corePauseApp> =>
        execute(corePauseApp, args[0]) as ReturnType<typeof corePauseApp>;
}

export { corePauseApp as pauseApp };
export type { PauseAppData, PauseAppResponse, PauseAppResponses };
