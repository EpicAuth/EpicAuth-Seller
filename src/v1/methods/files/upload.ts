import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function upload(request: SellerRequester) {
    return async (data: SellerInput<"upload">) => {
        const response = await request({
            type: "upload",
            ...data,
        });

        return response;
    };
}
