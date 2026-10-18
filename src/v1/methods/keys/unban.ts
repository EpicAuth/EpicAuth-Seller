import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function unban(request: SellerRequester) {
    return async (data: SellerInput<"unban">) => {
        const response = await request({
            type: "unban",
            ...data,
        });

        return response;
    };
}
