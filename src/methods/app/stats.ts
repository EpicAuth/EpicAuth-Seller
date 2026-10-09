import type {
    SellerInput,
    SellerRequester,
} from "../../client/types";

export function createStats(request: SellerRequester) {
    /**
 * 
 * @param request 
 * @returns 
 */
    return async (data: SellerInput<"stats">) => {
        const response = await request({
            type: "stats",
            ...data,
        });

        return response;
    };
}