import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function dellogs(request: SellerRequester) {
    return async (data: SellerInput<"dellogs">) => {
        const response = await request({
            type: "dellogs",
            ...data,
        });

        return response;
    };
}
