import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delallvars(request: SellerRequester) {
    return async (data: SellerInput<"delallvars">) => {
        const response = await request({
            type: "delallvars",
            ...data,
        });

        return response;
    };
}
