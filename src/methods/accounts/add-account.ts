import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addAccount(request: SellerRequester) {
    return async (data: SellerInput<"addAccount">) => {
        const response = await request({
            type: "addAccount",
            ...data,
        });

        return response;
    };
}
