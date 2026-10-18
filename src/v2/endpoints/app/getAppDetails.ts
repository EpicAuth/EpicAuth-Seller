import {
    getAppDetails as coreGetAppDetails,
    type GetAppDetailsData,
    type GetAppDetailsResponse,
    type GetAppDetailsResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetAppDetails(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetAppDetailsData>): ReturnType<typeof coreGetAppDetails> =>
        execute(coreGetAppDetails, args[0]) as ReturnType<typeof coreGetAppDetails>;
}

export { coreGetAppDetails as getAppDetails };
export type { GetAppDetailsData, GetAppDetailsResponse, GetAppDetailsResponses };
