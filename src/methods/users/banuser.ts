import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function banuser(request: SellerRequester) {
    return async (data: SellerInput<"banuser">) => {
        const response = await request({
            type: "banuser",
            ...data,
        });

        return response;
    };
}
