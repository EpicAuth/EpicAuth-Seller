import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function kill(request: SellerRequester) {
    return async (data: SellerInput<"kill">) => {
        const response = await request({
            type: "kill",
            ...data,
        });

        return response;
    };
}
