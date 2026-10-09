import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function unpauseapp(request: SellerRequester) {
    return async (data: SellerInput<"unpauseapp">) => {
        const response = await request({
            type: "unpauseapp",
            ...data,
        });

        return response;
    };
}
