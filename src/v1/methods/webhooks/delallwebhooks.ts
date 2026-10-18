import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delallwebhooks(request: SellerRequester) {
    return async (data: SellerInput<"delallwebhooks">) => {
        const response = await request({
            type: "delallwebhooks",
            ...data,
        });

        return response;
    };
}
