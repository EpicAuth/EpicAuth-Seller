import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallvars(request: SellerRequester) {
    return async (data: SellerInput<"fetchallvars">) => {
        const response = await request({
            type: "fetchallvars",
            ...data,
        });

        return response;
    };
}
