import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addsub(request: SellerRequester) {
    return async (data: SellerInput<"addsub">) => {
        const response = await request({
            type: "addsub",
            ...data,
        });

        return response;
    };
}
