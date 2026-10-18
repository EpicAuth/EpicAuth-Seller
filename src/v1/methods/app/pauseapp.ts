import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function pauseapp(request: SellerRequester) {
    return async (data: SellerInput<"pauseapp">) => {
        const response = await request({
            type: "pauseapp",
            ...data,
        });

        return response;
    };
}
