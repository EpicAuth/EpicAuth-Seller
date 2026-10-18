import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function unmuteuser(request: SellerRequester) {
    return async (data: SellerInput<"unmuteuser">) => {
        const response = await request({
            type: "unmuteuser",
            ...data,
        });

        return response;
    };
}
