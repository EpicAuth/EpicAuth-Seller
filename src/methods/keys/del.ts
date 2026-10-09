import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function del(request: SellerRequester) {
    return async (data: SellerInput<"del">) => {
        const response = await request({
            type: "del",
            ...data,
        });

        return response;
    };
}
