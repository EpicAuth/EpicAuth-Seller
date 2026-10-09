import type { SellerRequester } from "../../client/types";

import { addAccount } from "./add-account";
import { deleteAccount } from "./delete-account";
import { getbalance } from "./getbalance";
import { setbalance } from "./setbalance";
import { setseller } from "./setseller";

export function createAccounts(request: SellerRequester) {
    return {
        /** @description Create a new reseller/manager account (`addAccount`). */
        add: addAccount(request),
        /** @description Delete a reseller/manager account (`deleteAccount`). */
        delete: deleteAccount(request),
        /** @description Retrieve balance from a reseller (`getbalance`). */
        getBalance: getbalance(request),
        /** @description Add balance to a reseller (`setbalance`). */
        setBalance: setbalance(request),
        /** @description Configure the seller store (`setseller`). */
        setSeller: setseller(request),
    };
}
