import type { SellerExecutor, SellerOptions } from "./types";
import { createSellerExecutor } from "./request";

import { createKeys } from "../endpoints/keys";
import { createUsers } from "../endpoints/users";
import { createSubscriptions } from "../endpoints/subscriptions";
import { createVars } from "../endpoints/vars";
import { createApp } from "../endpoints/app";
import { createSettings } from "../endpoints/settings";
import { createFiles } from "../endpoints/files";
import { createWebhooks } from "../endpoints/webhooks";
import { createChannels } from "../endpoints/channels";
import { createSessions } from "../endpoints/sessions";
import { createAccounts } from "../endpoints/accounts";
import { createBlacklist } from "../endpoints/blacklist";
import { createWhitelist } from "../endpoints/whitelist";
import { createLogs } from "../endpoints/logs";
import { createWebloader } from "../endpoints/webloader";

export class Seller {
    public readonly sellerKey: string;
    public readonly baseUrl: string;

    public readonly keys: ReturnType<typeof createKeys>;
    public readonly users: ReturnType<typeof createUsers>;
    public readonly subscriptions: ReturnType<typeof createSubscriptions>;
    public readonly var: ReturnType<typeof createVars>;
    public readonly vars: ReturnType<typeof createVars>;
    public readonly app: ReturnType<typeof createApp>;
    public readonly settings: ReturnType<typeof createSettings>;
    public readonly files: ReturnType<typeof createFiles>;
    public readonly webhooks: ReturnType<typeof createWebhooks>;
    public readonly channels: ReturnType<typeof createChannels>;
    public readonly sessions: ReturnType<typeof createSessions>;
    public readonly accounts: ReturnType<typeof createAccounts>;
    public readonly blacklist: ReturnType<typeof createBlacklist>;
    public readonly whitelist: ReturnType<typeof createWhitelist>;
    public readonly logs: ReturnType<typeof createLogs>;
    public readonly webloader: ReturnType<typeof createWebloader>;

    private readonly executeInternal: SellerExecutor;

    constructor(options: SellerOptions) {
        this.sellerKey = options.sellerKey;
        this.baseUrl = options.baseUrl ?? "https://epicauth.cc/api";
        this.executeInternal = createSellerExecutor(options);

        this.keys = createKeys(this.executeInternal);
        this.users = createUsers(this.executeInternal);
        this.subscriptions = createSubscriptions(this.executeInternal);
        this.vars = createVars(this.executeInternal);
        this.var = this.vars;
        this.app = createApp(this.executeInternal);
        this.settings = createSettings(this.executeInternal);
        this.files = createFiles(this.executeInternal);
        this.webhooks = createWebhooks(this.executeInternal);
        this.channels = createChannels(this.executeInternal);
        this.sessions = createSessions(this.executeInternal);
        this.accounts = createAccounts(this.executeInternal);
        this.blacklist = createBlacklist(this.executeInternal);
        this.whitelist = createWhitelist(this.executeInternal);
        this.logs = createLogs(this.executeInternal);
        this.webloader = createWebloader(this.executeInternal);
    }

    public execute<TResult = any>(
        fn: (options: any) => Promise<TResult>,
        data?: any,
    ): Promise<TResult> {
        return this.executeInternal(fn, data);
    }
}
