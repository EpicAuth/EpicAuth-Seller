import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function addchannel(request: SellerRequester) {
    return async (data: SellerInput<"addchannel">) => {
        const response = await request({
            type: "addchannel",
            ...data,
        });

        return response;
    };
}
