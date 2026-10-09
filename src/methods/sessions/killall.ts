import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function killall(request: SellerRequester) {
    return async (data: SellerInput<"killall">) => {
        const response = await request({
            type: "killall",
            ...data,
        });

        return response;
    };
}
