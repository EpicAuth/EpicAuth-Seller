import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function getbalance(request: SellerRequester) {
    return async (data: SellerInput<"getbalance">) => {
        const response = await request({
            type: "getbalance",
            ...data,
        });

        return response;
    };
}
