import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delblacks(request: SellerRequester) {
    return async (data: SellerInput<"delblacks">) => {
        const response = await request({
            type: "delblacks",
            ...data,
        });

        return response;
    };
}
