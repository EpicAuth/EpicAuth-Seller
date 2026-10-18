import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function pausesub(request: SellerRequester) {
    return async (data: SellerInput<"pausesub">) => {
        const response = await request({
            type: "pausesub",
            ...data,
        });

        return response;
    };
}
