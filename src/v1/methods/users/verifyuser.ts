import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function verifyuser(request: SellerRequester) {
    return async (data: SellerInput<"verifyuser">) => {
        const response = await request({
            type: "verifyuser",
            ...data,
        });

        return response;
    };
}
