import type {
    SellerInput,
    SellerRequester,
} from "../../../client/types";

export function massUserVarDelete(request: SellerRequester) {
    return async (data: SellerInput<"massUserVarDelete">) => {
        const response = await request({
            type: "massUserVarDelete",
            ...data,
        });

        return response;
    };
}
