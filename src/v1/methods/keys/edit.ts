import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function edit(request: SellerRequester) {
    return async (data: SellerInput<"edit">) => {
        const response = await request({
            type: "edit",
            ...data,
        });

        return response;
    };
}
