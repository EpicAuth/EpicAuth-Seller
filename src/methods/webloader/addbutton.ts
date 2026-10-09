import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addbutton(request: SellerRequester) {
    return async (data: SellerInput<"addbutton">) => {
        const response = await request({
            type: "addbutton",
            ...data,
        });

        return response;
    };
}
