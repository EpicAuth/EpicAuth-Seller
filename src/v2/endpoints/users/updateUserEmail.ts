import {
    updateUserEmail as coreUpdateUserEmail,
    type UpdateUserEmailData,
    type UpdateUserEmailResponse,
    type UpdateUserEmailResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createUpdateUserEmail(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<UpdateUserEmailData>): ReturnType<typeof coreUpdateUserEmail> =>
        execute(coreUpdateUserEmail, args[0]) as ReturnType<typeof coreUpdateUserEmail>;
}

export { coreUpdateUserEmail as updateUserEmail };
export type { UpdateUserEmailData, UpdateUserEmailResponse, UpdateUserEmailResponses };
