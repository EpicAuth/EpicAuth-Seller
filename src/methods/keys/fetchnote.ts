import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchnote(request: SellerRequester) {
    return async (data: SellerInput<"fetchnote">) => {
        const response = await request({
            type: "fetchnote",
            ...data,
        });

        return response;
    };
}
