import UserAccount from "../models/userAccount.model.js";
import {ADMIN, MODER, USER} from "./constants.js";

export async function createAdmin() {
    let admin = await UserAccount.findById('admin');
    if(!admin){
        admin = new UserAccount({
            login: 'admin',
            password: 'admin',
            firstName: 'Administrator',
            lastName: 'Administrator',
            roles: [USER, ADMIN, MODER]
        });
        await admin.save();
    }
}