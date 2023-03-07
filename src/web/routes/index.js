"use strict";
exports.__esModule = true;
exports.bootstrapRouters = void 0;
var todoRouter_1 = require("./todoRouter");
var userRouter_1 = require("./userRouter");
var bootstrapRouters = function (app, diContainer) {
    var todoRouter = (0, todoRouter_1.getTodoRouter)(diContainer.todoController);
    var userRouter = (0, userRouter_1.getUserRouter)(diContainer.userController);
    // add routers to the main app as sub-routers
    app.use(todoRouter);
    app.use(userRouter);
};
exports.bootstrapRouters = bootstrapRouters;
