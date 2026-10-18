import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delunused(request: SellerRequester) {
    return async (data: SellerInput<"delunused">) => {
        const response = await request({
            type: "delunused",
            ...data,
        });

        return response;
    };
}
