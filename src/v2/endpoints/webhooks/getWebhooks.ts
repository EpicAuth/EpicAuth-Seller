import {
    getWebhooks as coreGetWebhooks,
    type GetWebhooksData,
    type GetWebhooksResponse,
    type GetWebhooksResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetWebhooks(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetWebhooksData>): ReturnType<typeof coreGetWebhooks> =>
        execute(coreGetWebhooks, args[0]) as ReturnType<typeof coreGetWebhooks>;
}

export { coreGetWebhooks as getWebhooks };
export type { GetWebhooksData, GetWebhooksResponse, GetWebhooksResponses };
