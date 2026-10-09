import type { SellerRequester } from "../../client/types";

import { addsub } from "./addsub";
import { countsubs } from "./countsubs";
import { delappsub } from "./delappsub";
import { delsub } from "./delsub";
import { editsub } from "./editsub";
import { extend } from "./extend";
import { fetchallsubs } from "./fetchallsubs";
import { pausesub } from "./pausesub";
import { subtract } from "./subtract";
import { unpausesub } from "./unpausesub";

export function createSubscriptions(request: SellerRequester) {
    return {
        /** @description Create a new subscription (`addsub`). */
        add: addsub(request),
        /** @description Delete a user's subscription (`delsub`). */
        del: delsub(request),
        /** @description Delete an app subscription level (`delappsub`). */
        delAppSub: delappsub(request),
        /** @description Edit an existing subscription (`editsub`). */
        edit: editsub(request),
        /** @description Extend a user's expiration (`extend`). */
        extend: extend(request),
        /** @description Subtract time from a user's expiration (`subtract`). */
        subtract: subtract(request),
        /** @description Pause a subscription (`pausesub`). */
        pause: pausesub(request),
        /** @description Unpause a subscription (`unpausesub`). */
        unpause: unpausesub(request),
        /** @description Retrieve all subscriptions (`fetchallsubs`). */
        fetchAll: fetchallsubs(request),
        /** @description Count subscriptions (`countsubs`). */
        count: countsubs(request),
    };
}
