import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delbutton(request: SellerRequester) {
    return async (data: SellerInput<"delbutton">) => {
        const response = await request({
            type: "delbutton",
            ...data,
        });

        return response;
    };
}
