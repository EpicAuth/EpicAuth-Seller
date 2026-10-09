import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallfiles(request: SellerRequester) {
    return async (data: SellerInput<"fetchallfiles">) => {
        const response = await request({
            type: "fetchallfiles",
            ...data,
        });

        return response;
    };
}
