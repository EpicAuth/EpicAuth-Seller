import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function editvar(request: SellerRequester) {
    return async (data: SellerInput<"editvar">) => {
        const response = await request({
            type: "editvar",
            ...data,
        });

        return response;
    };
}
