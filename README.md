# @epicauth/seller

Unofficial TypeScript SDK for the [EpicAuth](https://epicauth.cc) Seller API.
Wraps every seller endpoint (103 of them) in a typed client so you don't have to
hand-roll requests against `https://epicauth.cc/api/seller/`.

Built on top of the generated client [`@epicauth/seller-core`](https://www.npmjs.com/package/@epicauth/seller-core),
which is where the request types come from. Everything is strict TypeScript,
no `any`, no runtime dependencies beyond the core package.

Runs in [Bun](https://bun.com) or inside a bundler (Vite, webpack, Next...).
Plain Node ESM won't work — the emitted files use extensionless imports, same
as `seller-core` itself.

## Install

```bash
bun add @epicauth/seller
```

npm/pnpm/yarn work too, this is just a plain package.

## Usage

```ts
import { Seller } from "@epicauth/seller";

const seller = new Seller({
    sellerKey: "your-seller-key",
    // baseUrl: "https://your-custom-domain.cc/api", // optional
});

// licenses
const { data } = await seller.keys.add({ expiry: 30 });
await seller.keys.addTime({ time: 7 });
await seller.keys.verify({ key: "ABC-123" });

// users
await seller.users.addUser({
    user: "john",
    pass: "secret",
    sub: "premium",
    expiry: 30,
});
await seller.users.vars.setVar({ user: "john", var: "role", data: "admin" });
```

Heads up: `expiry` on licenses and users is in **days**, `addTime` takes days
too — but not every endpoint is that obvious. Worth skimming the parameter
descriptions in the EpicAuth docs for the one you're calling.

## What's on the client

Everything is grouped by resource, so autocomplete stays usable:

| | |
| --- | --- |
| `seller.keys` | licenses — create, edit, ban, verify, delete, notes, fetch |
| `seller.users` | app users — create, pause, ban, HWID, password/email edits |
| `seller.users.vars` | per-user variables — get/set/delete/fetch |
| `seller.var` (or `seller.vars`) | global variables |
| `seller.subscriptions` | subscription levels — add, edit, extend, pause |
| `seller.app` | app stats/details, pause the app, hashes |
| `seller.settings` | get/update app settings |
| `seller.files` | upload, fetch, edit, delete hosted files |
| `seller.webhooks` | add / list / delete webhooks |
| `seller.channels` | chat channels, mutes |
| `seller.sessions` | kill sessions |
| `seller.accounts` | reseller/manager accounts, balances |
| `seller.blacklist` / `seller.whitelist` | HWID/IP blacklists and whitelists |
| `seller.logs` | app logs |
| `seller.webloader` | web loader buttons |

Naming follows the API where it makes sense. `addtime` becomes `addTime`,
`fetchallkeys` becomes `keys.fetchAll()`, and so on. The operation names the
API itself uses (like `delsub` or `retrvvar`) keep their spelling internally,
so nothing breaks if you're cross-referencing the EpicAuth docs.

The full operation-by-operation mapping lives in `docs/SDK_PROGRESS.md`.

## Errors

Anything that goes wrong — bad key, network failure, or the API answering with
`{ success: false, message: "..." }` (it does that even with a 200 status) —
throws a `SellerError`:

```ts
import { Seller, SellerError } from "@epicauth/seller";

try {
    await seller.keys.fetchAll({});
} catch (err) {
    if (err instanceof SellerError) {
        console.log(err.message);  // e.g. "Seller key should be 32 characters long..."
        console.log(err.status);   // HTTP status, or 0 for network errors
        console.log(err.details);  // raw payload
    }
}
```

## A note on response types

The generated core package doesn't ship response schemas, only request types.
Method results therefore look like this:

```ts
const res = await seller.keys.info({ key: "ABC-123" });
// res.data is `unknown` — narrow it yourself, e.g. with a type guard
```

Input parameters are fully typed (required fields, literal unions like
`role: "seller" | "reseller" | ...`), it's only the responses you have to
narrow. If `seller-core` ever grows response types this will get tighter.

## Development

```bash
bun install
bun run typecheck   # tsc --noEmit, should be clean
bun run build       # emits dist/ (js + d.ts), this is what gets published
bun run dev         # runs src/main.ts
```


