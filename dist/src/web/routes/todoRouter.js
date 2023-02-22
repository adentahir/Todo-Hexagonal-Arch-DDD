"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controllers/todoController");
const todoRouter = express_1.default.Router();
//todoIndex, todoShow, todoCreate, todoUpdate, todoDelete
todoRouter.get('/', todoController_1.todoIndex);
todoRouter.get('/todos/:id', (todoController_1.todoShow));
todoRouter.post('/todos/add', (todoController_1.todoCreate));
todoRouter.put('/todos/:id', (todoController_1.todoUpdate));
todoRouter.delete('todos/:id', (todoController_1.todoDelete));
exports.default = todoRouter;
