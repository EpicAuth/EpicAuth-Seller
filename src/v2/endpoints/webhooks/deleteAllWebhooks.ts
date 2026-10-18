import {
    deleteAllWebhooks as coreDeleteAllWebhooks,
    type DeleteAllWebhooksData,
    type DeleteAllWebhooksResponse,
    type DeleteAllWebhooksResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteAllWebhooks(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteAllWebhooksData>): ReturnType<typeof coreDeleteAllWebhooks> =>
        execute(coreDeleteAllWebhooks, args[0]) as ReturnType<typeof coreDeleteAllWebhooks>;
}

export { coreDeleteAllWebhooks as deleteAllWebhooks };
export type { DeleteAllWebhooksData, DeleteAllWebhooksResponse, DeleteAllWebhooksResponses };
