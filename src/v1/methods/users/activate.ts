import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function activate(request: SellerRequester) {
    return async (data: SellerInput<"activate">) => {
        const response = await request({
            type: "activate",
            ...data,
        });

        return response;
    };
}
