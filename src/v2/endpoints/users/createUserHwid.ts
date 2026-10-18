import {
    createUserHwid as coreCreateUserHwid,
    type CreateUserHwidData,
    type CreateUserHwidResponse,
    type CreateUserHwidResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateUserHwid(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateUserHwidData>): ReturnType<typeof coreCreateUserHwid> =>
        execute(coreCreateUserHwid, args[0]) as ReturnType<typeof coreCreateUserHwid>;
}

export { coreCreateUserHwid as createUserHwid };
export type { CreateUserHwidData, CreateUserHwidResponse, CreateUserHwidResponses };
