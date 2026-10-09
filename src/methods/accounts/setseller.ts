import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function setseller(request: SellerRequester) {
    return async (data: SellerInput<"setseller">) => {
        const response = await request({
            type: "setseller",
            ...data,
        });

        return response;
    };
}
