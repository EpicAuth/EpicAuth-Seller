import {
    setUserCooldown as coreSetUserCooldown,
    type SetUserCooldownData,
    type SetUserCooldownResponse,
    type SetUserCooldownResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createSetUserCooldown(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<SetUserCooldownData>): ReturnType<typeof coreSetUserCooldown> =>
        execute(coreSetUserCooldown, args[0]) as ReturnType<typeof coreSetUserCooldown>;
}

export { coreSetUserCooldown as setUserCooldown };
export type { SetUserCooldownData, SetUserCooldownResponse, SetUserCooldownResponses };
