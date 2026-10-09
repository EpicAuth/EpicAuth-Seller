import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function resetuser(request: SellerRequester) {
    return async (data: SellerInput<"resetuser">) => {
        const response = await request({
            type: "resetuser",
            ...data,
        });

        return response;
    };
}
