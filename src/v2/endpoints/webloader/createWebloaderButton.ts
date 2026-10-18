import {
    createWebloaderButton as coreCreateWebloaderButton,
    type CreateWebloaderButtonData,
    type CreateWebloaderButtonResponse,
    type CreateWebloaderButtonResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateWebloaderButton(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateWebloaderButtonData>): ReturnType<typeof coreCreateWebloaderButton> =>
        execute(coreCreateWebloaderButton, args[0]) as ReturnType<typeof coreCreateWebloaderButton>;
}

export { coreCreateWebloaderButton as createWebloaderButton };
export type { CreateWebloaderButtonData, CreateWebloaderButtonResponse, CreateWebloaderButtonResponses };
