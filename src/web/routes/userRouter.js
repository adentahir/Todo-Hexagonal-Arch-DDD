"use strict";
exports.__esModule = true;
exports.getUserRouter = void 0;
var express_1 = require("express");
var getUserRouter = function (userController) {
    var userRouter = express_1["default"].Router();
    userRouter.get("/users/:id", userController.getUser);
    userRouter.post("/users/add", userController.userCreate);
    return userRouter;
};
exports.getUserRouter = getUserRouter;
