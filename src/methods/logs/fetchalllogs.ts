import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function fetchalllogs(request: SellerRequester) {
    return async (data: SellerInput<"fetchalllogs">) => {
        const response = await request({
            type: "fetchalllogs",
            ...data,
        });

        return response;
    };
}
