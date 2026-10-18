import {
    getUserData as coreGetUserData,
    type GetUserDataData,
    type GetUserDataResponse,
    type GetUserDataResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createGetUserData(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<GetUserDataData>): ReturnType<typeof coreGetUserData> =>
        execute(coreGetUserData, args[0]) as ReturnType<typeof coreGetUserData>;
}

export { coreGetUserData as getUserData };
export type { GetUserDataData, GetUserDataResponse, GetUserDataResponses };
