import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delWhite(request: SellerRequester) {
    return async (data: SellerInput<"delWhite">) => {
        const response = await request({
            type: "delWhite",
            ...data,
        });

        return response;
    };
}
