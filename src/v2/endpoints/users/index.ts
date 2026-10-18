import type { SellerExecutor } from "../../client/types";

import { createUserVars } from "./vars";
import { createCreateUser } from "./createUser";
import { createGetUsers } from "./getUsers";
import { createGetUsernames } from "./getUsernames";
import { createGetUserData } from "./getUserData";
import { createGetUserSubscription } from "./getUserSubscription";
import { createVerifyUser } from "./verifyUser";
import { createDeleteUser } from "./deleteUser";
import { createDeleteAllUsers } from "./deleteAllUsers";
import { createDeleteExpiredUsers } from "./deleteExpiredUsers";
import { createPauseUser } from "./pauseUser";
import { createUnpauseUser } from "./unpauseUser";
import { createActivateUser } from "./activateUser";
import { createBanUser } from "./banUser";
import { createUnbanUser } from "./unbanUser";
import { createResetUser } from "./resetUser";
import { createResetAllUsers } from "./resetAllUsers";
import { createResetUserPassword } from "./resetUserPassword";
import { createUpdateUserUsername } from "./updateUserUsername";
import { createUpdateUserEmail } from "./updateUserEmail";
import { createSetUserCooldown } from "./setUserCooldown";
import { createSubtractUser } from "./subtractUser";
import { createCreateUserHwid } from "./createUserHwid";
import { createDeleteUserHwid } from "./deleteUserHwid";
import { createAssignUserKey } from "./assignUserKey";

export function createUsers(execute: SellerExecutor) {
    const createUser = createCreateUser(execute);
    const getUsers = createGetUsers(execute);
    const getUsernames = createGetUsernames(execute);
    const getUserData = createGetUserData(execute);
    const getUserSubscription = createGetUserSubscription(execute);
    const verifyUser = createVerifyUser(execute);
    const deleteUser = createDeleteUser(execute);
    const deleteAllUsers = createDeleteAllUsers(execute);
    const deleteExpiredUsers = createDeleteExpiredUsers(execute);
    const pauseUser = createPauseUser(execute);
    const unpauseUser = createUnpauseUser(execute);
    const activateUser = createActivateUser(execute);
    const banUser = createBanUser(execute);
    const unbanUser = createUnbanUser(execute);
    const resetUser = createResetUser(execute);
    const resetAllUsers = createResetAllUsers(execute);
    const resetUserPassword = createResetUserPassword(execute);
    const updateUserUsername = createUpdateUserUsername(execute);
    const updateUserEmail = createUpdateUserEmail(execute);
    const setUserCooldown = createSetUserCooldown(execute);
    const subtractUser = createSubtractUser(execute);
    const createUserHwid = createCreateUserHwid(execute);
    const deleteUserHwid = createDeleteUserHwid(execute);
    const assignUserKey = createAssignUserKey(execute);

    return {
        vars: createUserVars(execute),
        getAll: getUsers,
        create: createUser,
        getUsernames,
        getData: getUserData,
        getSubscription: getUserSubscription,
        verify: verifyUser,
        delete: deleteUser,
        deleteAll: deleteAllUsers,
        deleteExpired: deleteExpiredUsers,
        pause: pauseUser,
        unpause: unpauseUser,
        activate: activateUser,
        ban: banUser,
        unban: unbanUser,
        reset: resetUser,
        resetAll: resetAllUsers,
        resetPassword: resetUserPassword,
        updateUsername: updateUserUsername,
        updateEmail: updateUserEmail,
        setCooldown: setUserCooldown,
        subtract: subtractUser,
        createHwid: createUserHwid,
        deleteHwid: deleteUserHwid,
        assignKey: assignUserKey,
    };
}

export * from "./createUser";
export * from "./getUsers";
export * from "./getUsernames";
export * from "./getUserData";
export * from "./getUserSubscription";
export * from "./verifyUser";
export * from "./deleteUser";
export * from "./deleteAllUsers";
export * from "./deleteExpiredUsers";
export * from "./pauseUser";
export * from "./unpauseUser";
export * from "./activateUser";
export * from "./banUser";
export * from "./unbanUser";
export * from "./resetUser";
export * from "./resetAllUsers";
export * from "./resetUserPassword";
export * from "./updateUserUsername";
export * from "./updateUserEmail";
export * from "./setUserCooldown";
export * from "./subtractUser";
export * from "./createUserHwid";
export * from "./deleteUserHwid";
export * from "./assignUserKey";
export * as vars from "./vars";
