import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallusers(request: SellerRequester) {
    return async (data: SellerInput<"fetchallusers">) => {
        const response = await request({
            type: "fetchallusers",
            ...data,
        });

        return response;
    };
}
