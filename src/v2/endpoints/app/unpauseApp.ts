import {
    unpauseApp as coreUnpauseApp,
    type UnpauseAppData,
    type UnpauseAppResponse,
    type UnpauseAppResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUnpauseApp(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UnpauseAppData>): ReturnType<typeof coreUnpauseApp> =>
        execute(coreUnpauseApp, args[0]) as ReturnType<typeof coreUnpauseApp>;
}

export { coreUnpauseApp as unpauseApp };
export type { UnpauseAppData, UnpauseAppResponse, UnpauseAppResponses };
