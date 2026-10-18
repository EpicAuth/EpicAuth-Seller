import {
    subtractUser as coreSubtractUser,
    type SubtractUserData,
    type SubtractUserResponse,
    type SubtractUserResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createSubtractUser(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<SubtractUserData>): ReturnType<typeof coreSubtractUser> =>
        execute(coreSubtractUser, args[0]) as ReturnType<typeof coreSubtractUser>;
}

export { coreSubtractUser as subtractUser };
export type { SubtractUserData, SubtractUserResponse, SubtractUserResponses };
