import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function ban(request: SellerRequester) {
    return async (data: SellerInput<"ban">) => {
        const response = await request({
            type: "ban",
            ...data,
        });

        return response;
    };
}
