import {Router} from "express";
import userAccountController from "../controllers/userAccount.controller.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/register', validate('register'), userAccountController.register);
router.delete('/user/:user', userAccountController.removeUser);
router.patch('/user/:user', validate('updateUser'), userAccountController.updateUser);
router.patch('/user/:user/role/:role', validate('addRole', 'params'), userAccountController.addRole);
router.delete('/user/:user/role/:role', validate('deleteRole', 'params'), userAccountController.deleteRole);
router.get('/user/:user', userAccountController.getUser);
router.patch('/password', userAccountController.changePassword);
router.post('/login', userAccountController.login);


export default router;