import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delallfiles(request: SellerRequester) {
    return async (data: SellerInput<"delallfiles">) => {
        const response = await request({
            type: "delallfiles",
            ...data,
        });

        return response;
    };
}
