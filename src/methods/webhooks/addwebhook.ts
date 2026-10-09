import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addwebhook(request: SellerRequester) {
    return async (data: SellerInput<"addwebhook">) => {
        const response = await request({
            type: "addwebhook",
            ...data,
        });

        return response;
    };
}
