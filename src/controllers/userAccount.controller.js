import userAccountService from '../services/userAccount.service.js';

class UserAccountController {
    async register(req, res, next) {
        try {
            const user = await userAccountService.register(req.body);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    }

    async getUser(req, res, next) {
        try {
            const user = await userAccountService.getUser(req.params.user);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    }

    async removeUser(req, res, next) {
        try {
            const user = await userAccountService.removeUser(req.params.user);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const user = await userAccountService.updateUser(req.params.user, req.body);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    }

    async addRole(req, res, next) {
        try {
            const user = await userAccountService.changeRoles(req.params.user, req.params.role,true);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    }

    async deleteRole(req, res, next) {
        try {
            const user = await userAccountService.changeRoles(req.params.user, req.params.role, false);
            return res.status(200).json(user);
        } catch (error) {
            return next(error);
        }
    }

    async login(req, res, next) {
        //TODO: login user
    }

    async changePassword(req, res, next) {
        //TODO: change password
    }
}

export default new UserAccountController();