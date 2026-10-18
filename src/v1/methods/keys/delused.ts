import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delused(request: SellerRequester) {
    return async (data: SellerInput<"delused">) => {
        const response = await request({
            type: "delused",
            ...data,
        });

        return response;
    };
}
