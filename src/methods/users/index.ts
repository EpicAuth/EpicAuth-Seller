import type { SellerRequester } from "../../client/types";

import { createUserVars } from "./vars";
import { activate } from "./activate";
import { addhwiduser } from "./addhwiduser";
import { adduser } from "./adduser";
import { banuser } from "./banuser";
import { delexpusers } from "./delexpusers";
import { delallusers } from "./delallusers";
import { deluser } from "./deluser";
import { editemail } from "./editemail";
import { editusername } from "./editusername";
import { fetchallusernames } from "./fetchallusernames";
import { fetchallusers } from "./fetchallusers";
import { pauseuser } from "./pauseuser";
import { resetalluser } from "./resetalluser";
import { resetpw } from "./resetpw";
import { resetuser } from "./resetuser";
import { setcooldown } from "./setcooldown";
import { unbanusers } from "./unbanusers";
import { unpauseusers } from "./unpauseusers";
import { userdata } from "./userdata";
import { usersub } from "./usersub";
import { verifyuser } from "./verifyuser";

export function createUsers(request: SellerRequester) {
    return {
        /**
         * @description User variable operations.
         */
        vars: createUserVars(request),
        /**
         * @description Create a new user (`adduser`).
         */
        addUser: adduser(request),
        /**
         * @description Delete an existing user (`deluser`).
         */
        delUser: deluser(request),
        /**
         * @description Delete all users (`delallusers`).
         */
        delAll: delallusers(request),
        /**
         * @description Delete all expired users (`delexpusers`).
         */
        delExpiredUsers: delexpusers(request),
        /**
         * @description Retrieve user data (`userdata`).
         */
        userData: userdata(request),
        /**
         * @description Verify a user exists (`verifyuser`).
         */
        verifyUser: verifyuser(request),
        /**
         * @description Activate a user with a license (`activate`).
         */
        activate: activate(request),
        /**
         * @description Change a user's password (`resetpw`).
         */
        resetPassword: resetpw(request),
        /**
         * @description Change a user's email (`editemail`).
         */
        editEmail: editemail(request),
        /**
         * @description Change a user's username (`editusername`).
         */
        editUsername: editusername(request),
        /**
         * @description Reset a user's HWID (`resetuser`).
         */
        resetUser: resetuser(request),
        /**
         * @description Reset all users' HWIDs (`resetalluser`).
         */
        resetAllUser: resetalluser(request),
        /**
         * @description Pause a user (`pauseuser`).
         */
        pause: pauseuser(request),
        /**
         * @description Unpause a user (`unpauseusers`).
         */
        unpause: unpauseusers(request),
        /**
         * @description Ban a user (`banuser`).
         */
        ban: banuser(request),
        /**
         * @description Unban a user (`unbanusers`).
         */
        unban: unbanusers(request),
        /**
         * @description Retrieve all users (`fetchallusers`).
         */
        fetchAll: fetchallusers(request),
        /**
         * @description Retrieve all usernames (`fetchallusernames`).
         */
        fetchAllUsernames: fetchallusernames(request),
        /**
         * @description Add an HWID to an existing user (`addhwiduser`).
         */
        addHwid: addhwiduser(request),
        /**
         * @description Set a user's HWID reset cooldown (`setcooldown`).
         */
        setCooldown: setcooldown(request),
        /**
         * @description Retrieve all of a user's subscriptions (`usersub`).
         */
        getSubscriptions: usersub(request),
    };
}
