import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallsubs(request: SellerRequester) {
    return async (data: SellerInput<"fetchallsubs">) => {
        const response = await request({
            type: "fetchallsubs",
            ...data,
        });

        return response;
    };
}
