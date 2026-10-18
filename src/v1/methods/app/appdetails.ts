import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function appdetails(request: SellerRequester) {
    return async (data: SellerInput<"appdetails">) => {
        const response = await request({
            type: "appdetails",
            ...data,
        });

        return response;
    };
}
