import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallblacks(request: SellerRequester) {
    return async (data: SellerInput<"fetchallblacks">) => {
        const response = await request({
            type: "fetchallblacks",
            ...data,
        });

        return response;
    };
}
