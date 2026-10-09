import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function adduser(request: SellerRequester) {
    return async (data: SellerInput<"adduser">) => {
        const response = await request({
            type: "adduser",
            ...data,
        });
        return response;
    };
}