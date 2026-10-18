import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function setbalance(request: SellerRequester) {
    return async (data: SellerInput<"setbalance">) => {
        const response = await request({
            type: "setbalance",
            ...data,
        });

        return response;
    };
}
