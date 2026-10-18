import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallkeys(request: SellerRequester) {
    return async (data: SellerInput<"fetchallkeys">) => {
        const response = await request({
            type: "fetchallkeys",
            ...data,
        });

        return response;
    };
}
