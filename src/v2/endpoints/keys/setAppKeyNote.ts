import {
    setAppKeyNote as coreSetAppKeyNote,
    type SetAppKeyNoteData,
    type SetAppKeyNoteResponse,
    type SetAppKeyNoteResponses,
} from "@epicauth/seller-core";
import type { SellerEndpointInput, SellerExecutor } from "../../client/types";

export function createSetAppKeyNote(execute: SellerExecutor) {
    return (...args: SellerEndpointInput<SetAppKeyNoteData>): ReturnType<typeof coreSetAppKeyNote> =>
        execute(coreSetAppKeyNote, args[0]) as ReturnType<typeof coreSetAppKeyNote>;
}

export { coreSetAppKeyNote as setAppKeyNote };
export type { SetAppKeyNoteData, SetAppKeyNoteResponse, SetAppKeyNoteResponses };
