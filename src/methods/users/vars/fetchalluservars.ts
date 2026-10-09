import type {
    SellerInput,
    SellerRequester,
} from "../../../client/types";

export function fetchalluservars(request: SellerRequester) {
    return async (data: SellerInput<"fetchalluservars">) => {
        const response = await request({
            type: "fetchalluservars",
            ...data,
        });

        return response;
    };
}
