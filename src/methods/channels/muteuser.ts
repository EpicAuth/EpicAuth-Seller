import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function muteuser(request: SellerRequester) {
    return async (data: SellerInput<"muteuser">) => {
        const response = await request({
            type: "muteuser",
            ...data,
        });

        return response;
    };
}
