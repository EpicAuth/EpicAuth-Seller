import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallbuttons(request: SellerRequester) {
    return async (data: SellerInput<"fetchallbuttons">) => {
        const response = await request({
            type: "fetchallbuttons",
            ...data,
        });

        return response;
    };
}
