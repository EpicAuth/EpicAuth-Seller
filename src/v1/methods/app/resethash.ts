import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function resethash(request: SellerRequester) {
    return async (data: SellerInput<"resethash">) => {
        const response = await request({
            type: "resethash",
            ...data,
        });

        return response;
    };
}
