import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchallsessions(request: SellerRequester) {
    return async (data: SellerInput<"fetchallsessions">) => {
        const response = await request({
            type: "fetchallsessions",
            ...data,
        });

        return response;
    };
}
