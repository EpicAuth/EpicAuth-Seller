import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function info(request: SellerRequester) {
    return async (data: SellerInput<"info">) => {
        const response = await request({
            type: "info",
            ...data,
        });

        return response;
    };
}
