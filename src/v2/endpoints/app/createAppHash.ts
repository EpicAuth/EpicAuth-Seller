import {
    createAppHash as coreCreateAppHash,
    type CreateAppHashData,
    type CreateAppHashResponse,
    type CreateAppHashResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateAppHash(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateAppHashData>): ReturnType<typeof coreCreateAppHash> =>
        execute(coreCreateAppHash, args[0]) as ReturnType<typeof coreCreateAppHash>;
}

export { coreCreateAppHash as createAppHash };
export type { CreateAppHashData, CreateAppHashResponse, CreateAppHashResponses };
