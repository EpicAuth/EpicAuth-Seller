import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchfile(request: SellerRequester) {
    return async (data: SellerInput<"fetchfile">) => {
        const response = await request({
            type: "fetchfile",
            ...data,
        });

        return response;
    };
}
