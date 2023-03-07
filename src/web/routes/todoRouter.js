"use strict";
exports.__esModule = true;
exports.getTodoRouter = void 0;
var express_1 = require("express");
var getTodoRouter = function (todoController) {
    var todoRouter = express_1["default"].Router();
    todoRouter.get("/", todoController.getAll);
    todoRouter.get("/todos/:id", todoController.todoShow);
    todoRouter.post("/todos/add", todoController.todoCreate);
    todoRouter.put("/todos/:id", todoController.todoUpdate);
    todoRouter["delete"]("todos/:id", todoController.deleteTodo);
    return todoRouter;
};
exports.getTodoRouter = getTodoRouter;
