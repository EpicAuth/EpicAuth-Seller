import type {
    SellerInput,
    SellerRequester,
} from "../../../client/types";

export function setvar(request: SellerRequester) {
    return async (data: SellerInput<"setvar">) => {
        const response = await request({
            type: "setvar",
            ...data,
        });
        return response;
    };
}