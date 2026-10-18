import {
    getWebloaderButtons as coreGetWebloaderButtons,
    type GetWebloaderButtonsData,
    type GetWebloaderButtonsResponse,
    type GetWebloaderButtonsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetWebloaderButtons(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetWebloaderButtonsData>): ReturnType<typeof coreGetWebloaderButtons> =>
        execute(coreGetWebloaderButtons, args[0]) as ReturnType<typeof coreGetWebloaderButtons>;
}

export { coreGetWebloaderButtons as getWebloaderButtons };
export type { GetWebloaderButtonsData, GetWebloaderButtonsResponse, GetWebloaderButtonsResponses };
