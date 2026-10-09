import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function subtract(request: SellerRequester) {
    return async (data: SellerInput<"subtract">) => {
        const response = await request({
            type: "subtract",
            ...data,
        });

        return response;
    };
}
