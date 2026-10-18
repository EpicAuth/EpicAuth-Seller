import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function resetalluser(request: SellerRequester) {
    return async (data: SellerInput<"resetalluser">) => {
        const response = await request({
            type: "resetalluser",
            ...data,
        });

        return response;
    };
}
