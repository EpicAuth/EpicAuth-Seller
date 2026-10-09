import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function extend(request: SellerRequester) {
    return async (data: SellerInput<"extend">) => {
        const response = await request({
            type: "extend",
            ...data,
        });

        return response;
    };
}
