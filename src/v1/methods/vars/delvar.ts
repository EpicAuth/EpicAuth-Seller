import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delvar(request: SellerRequester) {
    return async (data: SellerInput<"delvar">) => {
        const response = await request({
            type: "delvar",
            ...data,
        });

        return response;
    };
}
