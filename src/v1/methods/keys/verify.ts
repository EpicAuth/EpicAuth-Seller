import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function verify(request: SellerRequester) {
    return async (data: SellerInput<"verify">) => {
        const response = await request({
            type: "verify",
            ...data,
        });

        return response;
    };
}
