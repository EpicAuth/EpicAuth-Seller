import type { SellerExecutor } from "../../client/types";

import { createGetLicenses } from "./getLicenses";
import { createCreateLicense } from "./createLicense";
import { createUpdateLicense } from "./updateLicense";
import { createDeleteLicense } from "./deleteLicense";
import { createDeleteAllLicenses } from "./deleteAllLicenses";
import { createDeleteManyLicenses } from "./deleteManyLicenses";
import { createDeleteUnusedLicenses } from "./deleteUnusedLicenses";
import { createDeleteUsedLicenses } from "./deleteUsedLicenses";
import { createExtendAllLicenses } from "./extendAllLicenses";
import { createExtendUnusedLicenses } from "./extendUnusedLicenses";
import { createBanLicense } from "./banLicense";
import { createUnbanLicense } from "./unbanLicense";
import { createVerifyLicense } from "./verifyLicense";
import { createGetLicenseInfo } from "./getLicenseInfo";
import { createGetLicenseNote } from "./getLicenseNote";
import { createSetAppKeyNote } from "./setAppKeyNote";
import { createSubtractLicense } from "./subtractLicense";

export function createKeys(execute: SellerExecutor) {
    const getLicenses = createGetLicenses(execute);
    const createLicense = createCreateLicense(execute);
    const updateLicense = createUpdateLicense(execute);
    const deleteLicense = createDeleteLicense(execute);
    const deleteAllLicenses = createDeleteAllLicenses(execute);
    const deleteManyLicenses = createDeleteManyLicenses(execute);
    const deleteUnusedLicenses = createDeleteUnusedLicenses(execute);
    const deleteUsedLicenses = createDeleteUsedLicenses(execute);
    const extendAllLicenses = createExtendAllLicenses(execute);
    const extendUnusedLicenses = createExtendUnusedLicenses(execute);
    const banLicense = createBanLicense(execute);
    const unbanLicense = createUnbanLicense(execute);
    const verifyLicense = createVerifyLicense(execute);
    const getLicenseInfo = createGetLicenseInfo(execute);
    const getLicenseNote = createGetLicenseNote(execute);
    const setAppKeyNote = createSetAppKeyNote(execute);
    const subtractLicense = createSubtractLicense(execute);

    return {
        getAll: getLicenses,
        create: createLicense,
        update: updateLicense,
        delete: deleteLicense,
        deleteAll: deleteAllLicenses,
        deleteMany: deleteManyLicenses,
        deleteUnused: deleteUnusedLicenses,
        deleteUsed: deleteUsedLicenses,
        extendAll: extendAllLicenses,
        extendUnused: extendUnusedLicenses,
        ban: banLicense,
        unban: unbanLicense,
        verify: verifyLicense,
        getInfo: getLicenseInfo,
        getNote: getLicenseNote,
        setNote: setAppKeyNote,
        subtract: subtractLicense,
    };
}

export * from "./getLicenses";
export * from "./createLicense";
export * from "./updateLicense";
export * from "./deleteLicense";
export * from "./deleteAllLicenses";
export * from "./deleteManyLicenses";
export * from "./deleteUnusedLicenses";
export * from "./deleteUsedLicenses";
export * from "./extendAllLicenses";
export * from "./extendUnusedLicenses";
export * from "./banLicense";
export * from "./unbanLicense";
export * from "./verifyLicense";
export * from "./getLicenseInfo";
export * from "./getLicenseNote";
export * from "./setAppKeyNote";
export * from "./subtractLicense";
