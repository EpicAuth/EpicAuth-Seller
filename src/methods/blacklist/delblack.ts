import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delblack(request: SellerRequester) {
    return async (data: SellerInput<"delblack">) => {
        const response = await request({
            type: "delblack",
            ...data,
        });

        return response;
    };
}
