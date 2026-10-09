import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addhash(request: SellerRequester) {
    return async (data: SellerInput<"addhash">) => {
        const response = await request({
            type: "addhash",
            ...data,
        });

        return response;
    };
}
