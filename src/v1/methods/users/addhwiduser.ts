import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addhwiduser(request: SellerRequester) {
    return async (data: SellerInput<"addhwiduser">) => {
        const response = await request({
            type: "addhwiduser",
            ...data,
        });

        return response;
    };
}
