import {
    createUser as coreCreateUser,
    type CreateUserData,
    type CreateUserResponse,
    type CreateUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createCreateUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<CreateUserData>): ReturnType<typeof coreCreateUser> =>
        execute(coreCreateUser, args[0]) as ReturnType<typeof coreCreateUser>;
}

export { coreCreateUser as createUser };
export type { CreateUserData, CreateUserResponse, CreateUserResponses };
