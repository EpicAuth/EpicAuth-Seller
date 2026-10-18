import {
    assignUserKey as coreAssignUserKey,
    type AssignUserKeyData,
    type AssignUserKeyResponse,
    type AssignUserKeyResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createAssignUserKey(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<AssignUserKeyData>): ReturnType<typeof coreAssignUserKey> =>
        execute(coreAssignUserKey, args[0]) as ReturnType<typeof coreAssignUserKey>;
}

export { coreAssignUserKey as assignUserKey };
export type { AssignUserKeyData, AssignUserKeyResponse, AssignUserKeyResponses };
