import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function getkey(request: SellerRequester) {
    return async (data: SellerInput<"getkey">) => {
        const response = await request({
            type: "getkey",
            ...data,
        });

        return response;
    };
}
