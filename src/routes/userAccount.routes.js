import {Router} from "express";
import userAccountController from "../controllers/userAccount.controller.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/register', validate('register'), userAccountController.register);
router.delete('/user/:user', userAccountController.removeUser);
router.patch('/user/:user', validate('updateUser'), userAccountController.updateUser);
router.patch('/user/:user/role/:role', userAccountController.addRole);
router.delete('/user/:user/role/:role', userAccountController.deleteRole);
router.get('/user/:user', userAccountController.getUser);
// router.patch('account/password', userAccountController.changePassword);
// router.post('/account/login', userAccountController.login);


export default router;