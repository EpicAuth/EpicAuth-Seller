import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function assignkey(request: SellerRequester) {
    return async (data: SellerInput<"assignkey">) => {
        const response = await request({
            type: "assignkey",
            ...data,
        });
        return response;
    };
}