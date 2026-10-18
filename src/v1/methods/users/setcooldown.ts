import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function setcooldown(request: SellerRequester) {
    return async (data: SellerInput<"setcooldown">) => {
        const response = await request({
            type: "setcooldown",
            ...data,
        });

        return response;
    };
}
