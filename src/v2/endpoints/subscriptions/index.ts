import type { SellerExecutor } from "../../client/types";

import { createGetSubscriptions } from "./getSubscriptions";
import { createGetSubscriptionCount } from "./getSubscriptionCount";
import { createCreateSubscription } from "./createSubscription";
import { createUpdateSubscription } from "./updateSubscription";
import { createExtendSubscription } from "./extendSubscription";
import { createPauseSubscription } from "./pauseSubscription";
import { createUnpauseSubscription } from "./unpauseSubscription";
import { createPauseAppSubscription } from "./pauseAppSubscription";
import { createUnpauseAppSubscription } from "./unpauseAppSubscription";
import { createDeleteUserSubscription } from "./deleteUserSubscription";
import { createDeleteAppSubscription } from "./deleteAppSubscription";

export function createSubscriptions(execute: SellerExecutor) {
    const getSubscriptions = createGetSubscriptions(execute);
    const getSubscriptionCount = createGetSubscriptionCount(execute);
    const createSubscription = createCreateSubscription(execute);
    const updateSubscription = createUpdateSubscription(execute);
    const extendSubscription = createExtendSubscription(execute);
    const pauseSubscription = createPauseSubscription(execute);
    const unpauseSubscription = createUnpauseSubscription(execute);
    const pauseAppSubscription = createPauseAppSubscription(execute);
    const unpauseAppSubscription = createUnpauseAppSubscription(execute);
    const deleteUserSubscription = createDeleteUserSubscription(execute);
    const deleteAppSubscription = createDeleteAppSubscription(execute);

    return {
        getAll: getSubscriptions,
        count: getSubscriptionCount,
        create: createSubscription,
        update: updateSubscription,
        extend: extendSubscription,
        pause: pauseSubscription,
        unpause: unpauseSubscription,
        pauseApp: pauseAppSubscription,
        unpauseApp: unpauseAppSubscription,
        deleteUser: deleteUserSubscription,
        deleteApp: deleteAppSubscription,
    };
}

export * from "./getSubscriptions";
export * from "./getSubscriptionCount";
export * from "./createSubscription";
export * from "./updateSubscription";
export * from "./extendSubscription";
export * from "./pauseSubscription";
export * from "./unpauseSubscription";
export * from "./pauseAppSubscription";
export * from "./unpauseAppSubscription";
export * from "./deleteUserSubscription";
export * from "./deleteAppSubscription";
