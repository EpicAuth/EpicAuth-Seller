import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function unbanusers(request: SellerRequester) {
    return async (data: SellerInput<"unbanusers">) => {
        const response = await request({
            type: "unbanusers",
            ...data,
        });

        return response;
    };
}
