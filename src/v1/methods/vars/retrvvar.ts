import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function retrvvar(request: SellerRequester) {
    return async (data: SellerInput<"retrvvar">) => {
        const response = await request({
            type: "retrvvar",
            ...data,
        });

        return response;
    };
}
