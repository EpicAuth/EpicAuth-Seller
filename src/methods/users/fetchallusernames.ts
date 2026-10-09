import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallusernames(request: SellerRequester) {
    return async (data: SellerInput<"fetchallusernames">) => {
        const response = await request({
            type: "fetchallusernames",
            ...data,
        });

        return response;
    };
}
