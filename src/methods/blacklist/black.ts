import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function black(request: SellerRequester) {
    return async (data: SellerInput<"black">) => {
        const response = await request({
            type: "black",
            ...data,
        });

        return response;
    };
}
