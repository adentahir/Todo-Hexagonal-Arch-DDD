"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRouter = express_1.default.Router();
//todoIndex, todoShow, todoCreate, todoUpdate, todoDelete
// todoRouter.get('/', todoIndex);
// todoRouter.get('/todos/:id', todoShow);
// todoRouter.post('/todos/add', todoCreate);
// todoRouter.put('/todos/:id', todoUpdate);
// todoRouter.delete('todos/:id', todoDelete);
exports.default = todoRouter;
