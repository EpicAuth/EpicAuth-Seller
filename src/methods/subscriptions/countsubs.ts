import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function countsubs(request: SellerRequester) {
    return async (data: SellerInput<"countsubs">) => {
        const response = await request({
            type: "countsubs",
            ...data,
        });

        return response;
    };
}
