import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function usersub(request: SellerRequester) {
    return async (data: SellerInput<"usersub">) => {
        const response = await request({
            type: "usersub",
            ...data,
        });

        return response;
    };
}
