import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function unpausesub(request: SellerRequester) {
    return async (data: SellerInput<"unpausesub">) => {
        const response = await request({
            type: "unpausesub",
            ...data,
        });

        return response;
    };
}
