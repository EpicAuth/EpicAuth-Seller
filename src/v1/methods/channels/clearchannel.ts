import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function clearchannel(request: SellerRequester) {
    return async (data: SellerInput<"clearchannel">) => {
        const response = await request({
            type: "clearchannel",
            ...data,
        });

        return response;
    };
}
