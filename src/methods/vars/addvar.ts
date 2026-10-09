import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addvar(request: SellerRequester) {
    return async (data: SellerInput<"addvar">) => {
        const response = await request({
            type: "addvar",
            ...data,
        });
        return response;
    };
}