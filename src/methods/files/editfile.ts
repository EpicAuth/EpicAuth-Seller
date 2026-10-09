import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function editfile(request: SellerRequester) {
    return async (data: SellerInput<"editfile">) => {
        const response = await request({
            type: "editfile",
            ...data,
        });

        return response;
    };
}
