import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addtime(request: SellerRequester) {
    return async (data: SellerInput<"addtime">) => {
        const response = await request({
            type: "addtime",
            ...data,
        });
        return response;
    };
}