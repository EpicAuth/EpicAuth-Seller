import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delexpusers(request: SellerRequester) {
    return async (data: SellerInput<"delexpusers">) => {
        const response = await request({
            type: "delexpusers",
            ...data,
        });

        return response;
    };
}
