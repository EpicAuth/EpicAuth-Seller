import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function editusername(request: SellerRequester) {
    return async (data: SellerInput<"editusername">) => {
        const response = await request({
            type: "editusername",
            ...data,
        });

        return response;
    };
}
