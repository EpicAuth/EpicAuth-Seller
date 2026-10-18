import {
    resetAppHash as coreResetAppHash,
    type ResetAppHashData,
    type ResetAppHashResponse,
    type ResetAppHashResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createResetAppHash(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<ResetAppHashData>): ReturnType<typeof coreResetAppHash> =>
        execute(coreResetAppHash, args[0]) as ReturnType<typeof coreResetAppHash>;
}

export { coreResetAppHash as resetAppHash };
export type { ResetAppHashData, ResetAppHashResponse, ResetAppHashResponses };
