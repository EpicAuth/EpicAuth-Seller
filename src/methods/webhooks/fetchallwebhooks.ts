import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallwebhooks(request: SellerRequester) {
    return async (data: SellerInput<"fetchallwebhooks">) => {
        const response = await request({
            type: "fetchallwebhooks",
            ...data,
        });

        return response;
    };
}
