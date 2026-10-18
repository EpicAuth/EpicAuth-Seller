import type {
    SellerInput,
    SellerRequester,
} from "../../../client/types";

export function getvar(request: SellerRequester) {
    return async (data: SellerInput<"getvar">) => {
        const response = await request({
            type: "getvar",
            ...data,
        });
        return response;
    };
}