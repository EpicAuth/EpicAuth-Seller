import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function editemail(request: SellerRequester) {
    return async (data: SellerInput<"editemail">) => {
        const response = await request({
            type: "editemail",
            ...data,
        });

        return response;
    };
}
