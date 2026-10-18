import type {
    SellerOptions,
    SellerRequester,
} from "./types";

import { createKeys } from "../methods/keys";
import { createAccounts } from "../methods/accounts";
import { createApp } from "../methods/app";
import { createBlacklist } from "../methods/blacklist";
import { createChannels } from "../methods/channels";
import { createFiles } from "../methods/files";
import { createLogs } from "../methods/logs";
import { createSessions } from "../methods/sessions";
import { createSettings } from "../methods/settings";
import { createSubscriptions } from "../methods/subscriptions";
import { createSellerRequester } from "./request";
import { createVars } from "../methods/vars";
import { createUsers } from "../methods/users";
import { createWebhooks } from "../methods/webhooks";
import { createWebloader } from "../methods/webloader";
import { createWhitelist } from "../methods/whitelist";

export class Seller {
    private readonly sellerKey: string;
    private readonly baseUrl: string;

    public readonly app: ReturnType<typeof createApp>;
    public readonly settings: ReturnType<typeof createSettings>;
    public readonly keys: ReturnType<typeof createKeys>;
    public readonly users: ReturnType<typeof createUsers>;
    public readonly subscriptions: ReturnType<typeof createSubscriptions>;
    /**
     * Global variable operations.
     */
    public readonly var: ReturnType<typeof createVars>;
    /**
     * Alias of {@link Seller.var}.
     */
    public readonly vars: ReturnType<typeof createVars>;
    public readonly files: ReturnType<typeof createFiles>;
    public readonly webhooks: ReturnType<typeof createWebhooks>;
    public readonly channels: ReturnType<typeof createChannels>;
    public readonly sessions: ReturnType<typeof createSessions>;
    public readonly accounts: ReturnType<typeof createAccounts>;
    public readonly blacklist: ReturnType<typeof createBlacklist>;
    public readonly whitelist: ReturnType<typeof createWhitelist>;
    public readonly logs: ReturnType<typeof createLogs>;
    public readonly webloader: ReturnType<typeof createWebloader>;

    private readonly request: SellerRequester;

    constructor(options: SellerOptions) {
        this.sellerKey = options.sellerKey;
        this.baseUrl = options.baseUrl ?? "https://epicauth.cc/api";

        this.request = createSellerRequester(options);

        this.keys = createKeys(this.request);
        this.users = createUsers(this.request);
        this.subscriptions = createSubscriptions(this.request);
        this.var = createVars(this.request);
        this.vars = this.var;
        this.app = createApp(this.request);
        this.settings = createSettings(this.request);
        this.files = createFiles(this.request);
        this.webhooks = createWebhooks(this.request);
        this.channels = createChannels(this.request);
        this.sessions = createSessions(this.request);
        this.accounts = createAccounts(this.request);
        this.blacklist = createBlacklist(this.request);
        this.whitelist = createWhitelist(this.request);
        this.logs = createLogs(this.request);
        this.webloader = createWebloader(this.request);
    }
}
