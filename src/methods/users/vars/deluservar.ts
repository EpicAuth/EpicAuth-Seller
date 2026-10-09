import type {
    SellerInput,
    SellerRequester,
} from "../../../client/types";

export function deluservar(request: SellerRequester) {
    return async (data: SellerInput<"deluservar">) => {
        const response = await request({
            type: "deluservar",
            ...data,
        });

        return response;
    };
}
