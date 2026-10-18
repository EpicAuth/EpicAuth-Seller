import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function updatesettings(request: SellerRequester) {
    return async (data: SellerInput<"updatesettings">) => {
        const response = await request({
            type: "updatesettings",
            ...data,
        });

        return response;
    };
}
