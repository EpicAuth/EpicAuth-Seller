import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function resetpw(request: SellerRequester) {
    return async (data: SellerInput<"resetpw">) => {
        const response = await request({
            type: "resetpw",
            ...data,
        });

        return response;
    };
}
