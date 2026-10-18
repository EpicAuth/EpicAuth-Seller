import {
    deleteWebloaderButton as coreDeleteWebloaderButton,
    type DeleteWebloaderButtonData,
    type DeleteWebloaderButtonResponse,
    type DeleteWebloaderButtonResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteWebloaderButton(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteWebloaderButtonData>): ReturnType<typeof coreDeleteWebloaderButton> =>
        execute(coreDeleteWebloaderButton, args[0]) as ReturnType<typeof coreDeleteWebloaderButton>;
}

export { coreDeleteWebloaderButton as deleteWebloaderButton };
export type { DeleteWebloaderButtonData, DeleteWebloaderButtonResponse, DeleteWebloaderButtonResponses };
