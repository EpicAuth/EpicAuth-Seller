import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delappsub(request: SellerRequester) {
    return async (data: SellerInput<"delappsub">) => {
        const response = await request({
            type: "delappsub",
            ...data,
        });

        return response;
    };
}
