import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function deleteAccount(request: SellerRequester) {
    return async (data: SellerInput<"deleteAccount">) => {
        const response = await request({
            type: "deleteAccount",
            ...data,
        });

        return response;
    };
}
