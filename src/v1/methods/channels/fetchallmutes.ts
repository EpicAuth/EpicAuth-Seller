import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallmutes(request: SellerRequester) {
    return async (data: SellerInput<"fetchallmutes">) => {
        const response = await request({
            type: "fetchallmutes",
            ...data,
        });

        return response;
    };
}
