import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function deluser(request: SellerRequester) {
    return async (data: SellerInput<"deluser">) => {
        const response = await request({
            type: "deluser",
            ...data,
        });

        return response;
    };
}
