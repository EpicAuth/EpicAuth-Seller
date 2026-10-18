import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addWhite(request: SellerRequester) {
    return async (data: SellerInput<"addWhite">) => {
        const response = await request({
            type: "addWhite",
            ...data,
        });

        return response;
    };
}
