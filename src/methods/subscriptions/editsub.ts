import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function editsub(request: SellerRequester) {
    return async (data: SellerInput<"editsub">) => {
        const response = await request({
            type: "editsub",
            ...data,
        });

        return response;
    };
}
