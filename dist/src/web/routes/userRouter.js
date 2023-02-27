"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRouter = express_1.default.Router();
// userRouter.post('/login', (userAuth))
userRouter.post('/user/add', (userController_1.userCreate));
// userRouter.post('/user/login', (loginUser));
// userRouter.post('/user/logout', (userLogout));
userRouter.get('/user/:id', (userController_1.getUser));
exports.default = userRouter;
