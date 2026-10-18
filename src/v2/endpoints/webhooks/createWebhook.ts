import {
    createWebhook as coreCreateWebhook,
    type CreateWebhookData,
    type CreateWebhookResponse,
    type CreateWebhookResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateWebhook(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateWebhookData>): ReturnType<typeof coreCreateWebhook> =>
        execute(coreCreateWebhook, args[0]) as ReturnType<typeof coreCreateWebhook>;
}

export { coreCreateWebhook as createWebhook };
export type { CreateWebhookData, CreateWebhookResponse, CreateWebhookResponses };
