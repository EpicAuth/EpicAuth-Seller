import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function createAdd(request: SellerRequester) {
    return async (data: SellerInput<"add">) => {
        const response = await request({
            type: "add",
            ...data,
        });

        return response;
    };
}