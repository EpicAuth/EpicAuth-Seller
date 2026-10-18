import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delfile(request: SellerRequester) {
    return async (data: SellerInput<"delfile">) => {
        const response = await request({
            type: "delfile",
            ...data,
        });

        return response;
    };
}
