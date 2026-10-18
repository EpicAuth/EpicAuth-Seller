import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function editchan(request: SellerRequester) {
    return async (data: SellerInput<"editchan">) => {
        const response = await request({
            type: "editchan",
            ...data,
        });

        return response;
    };
}
