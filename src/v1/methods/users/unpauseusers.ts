import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function unpauseusers(request: SellerRequester) {
    return async (data: SellerInput<"unpauseusers">) => {
        const response = await request({
            type: "unpauseusers",
            ...data,
        });

        return response;
    };
}
