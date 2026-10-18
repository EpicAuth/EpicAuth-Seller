export interface SellerOptions {
    sellerKey: string;
    baseUrl?: string;
}

export type SellerExecutor = (
    fn: (options: any) => Promise<any>,
    data?: any,
) => Promise<any>;

export type Simplify<T> = { [K in keyof T]: T[K] } & {};

export type ExtractData<TData extends { body?: any; query?: any }> =
    [NonNullable<TData["body"]>] extends [never]
        ? [NonNullable<TData["query"]>] extends [never]
            ? Record<string, never>
            : Simplify<Omit<NonNullable<TData["query"]>, "sellerkey">>
        : Simplify<Omit<NonNullable<TData["body"]>, "sellerkey">>;

export type HasRequiredKeys<T> = [Record<string, never>] extends [T] ? false : true;

export type SellerEndpointInput<TData extends { body?: any; query?: any }> =
    HasRequiredKeys<ExtractData<TData>> extends true
        ? [data: ExtractData<TData>]
        : [data?: ExtractData<TData>];
