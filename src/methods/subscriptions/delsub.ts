import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delsub(request: SellerRequester) {
    return async (data: SellerInput<"delsub">) => {
        const response = await request({
            type: "delsub",
            ...data,
        });

        return response;
    };
}
