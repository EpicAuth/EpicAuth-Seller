import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delallusers(request: SellerRequester) {
    return async (data: SellerInput<"delallusers">) => {
        const response = await request({
            type: "delallusers",
            ...data,
        });

        return response;
    };
}
