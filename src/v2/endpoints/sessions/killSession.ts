import {
    killSession as coreKillSession,
    type KillSessionData,
    type KillSessionResponse,
    type KillSessionResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createKillSession(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<KillSessionData>): ReturnType<typeof coreKillSession> =>
        execute(coreKillSession, args[0]) as ReturnType<typeof coreKillSession>;
}

export { coreKillSession as killSession };
export type { KillSessionData, KillSessionResponse, KillSessionResponses };
