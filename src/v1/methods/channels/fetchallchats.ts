import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallchats(request: SellerRequester) {
    return async (data: SellerInput<"fetchallchats">) => {
        const response = await request({
            type: "fetchallchats",
            ...data,
        });

        return response;
    };
}
