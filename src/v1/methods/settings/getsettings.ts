import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function getsettings(request: SellerRequester) {
    return async (data: SellerInput<"getsettings">) => {
        const response = await request({
            type: "getsettings",
            ...data,
        });

        return response;
    };
}
