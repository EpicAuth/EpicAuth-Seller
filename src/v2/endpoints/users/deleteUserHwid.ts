import {
    deleteUserHwid as coreDeleteUserHwid,
    type DeleteUserHwidData,
    type DeleteUserHwidResponse,
    type DeleteUserHwidResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createDeleteUserHwid(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<DeleteUserHwidData>): ReturnType<typeof coreDeleteUserHwid> =>
        execute(coreDeleteUserHwid, args[0]) as ReturnType<typeof coreDeleteUserHwid>;
}

export { coreDeleteUserHwid as deleteUserHwid };
export type { DeleteUserHwidData, DeleteUserHwidResponse, DeleteUserHwidResponses };
