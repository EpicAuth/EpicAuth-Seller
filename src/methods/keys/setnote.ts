import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function setnote(request: SellerRequester) {
    return async (data: SellerInput<"setnote">) => {
        const response = await request({
            type: "setnote",
            ...data,
        });

        return response;
    };
}
