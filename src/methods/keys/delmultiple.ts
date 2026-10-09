import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delmultiple(request: SellerRequester) {
    return async (data: SellerInput<"delmultiple">) => {
        const response = await request({
            type: "delmultiple",
            ...data,
        });

        return response;
    };
}
