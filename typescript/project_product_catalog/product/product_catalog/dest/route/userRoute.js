"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/* Import controller */
const userController_1 = require("../controller/userController");
router.post('/', userController_1.UserController.createUser);
router.post('/login', userController_1.UserController.login);
router.get('/', userController_1.UserController.getUser);
// router.get('/', Auth.auth, UserController.getUser);
exports.default = router;
