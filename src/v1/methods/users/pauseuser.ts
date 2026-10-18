import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function pauseuser(request: SellerRequester) {
    return async (data: SellerInput<"pauseuser">) => {
        const response = await request({
            type: "pauseuser",
            ...data,
        });

        return response;
    };
}
