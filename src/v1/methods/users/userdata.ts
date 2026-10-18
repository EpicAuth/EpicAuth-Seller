import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function userdata(request: SellerRequester) {
    return async (data: SellerInput<"userdata">) => {
        const response = await request({
            type: "userdata",
            ...data,
        });

        return response;
    };
}
