import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function delchannel(request: SellerRequester) {
    return async (data: SellerInput<"delchannel">) => {
        const response = await request({
            type: "delchannel",
            ...data,
        });

        return response;
    };
}
