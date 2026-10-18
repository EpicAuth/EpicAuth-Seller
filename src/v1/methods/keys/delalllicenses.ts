import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delalllicenses(request: SellerRequester) {
    return async (data: SellerInput<"delalllicenses">) => {
        const response = await request({
            type: "delalllicenses",
            ...data,
        });

        return response;
    };
}
