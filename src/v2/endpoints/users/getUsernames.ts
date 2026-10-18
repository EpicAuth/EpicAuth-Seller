import {
    getUsernames as coreGetUsernames,
    type GetUsernamesData,
    type GetUsernamesResponse,
    type GetUsernamesResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetUsernames(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetUsernamesData>): ReturnType<typeof coreGetUsernames> =>
        execute(coreGetUsernames, args[0]) as ReturnType<typeof coreGetUsernames>;
}

export { coreGetUsernames as getUsernames };
export type { GetUsernamesData, GetUsernamesResponse, GetUsernamesResponses };
