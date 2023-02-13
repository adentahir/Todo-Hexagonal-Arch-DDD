"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoDelete = exports.todoUpdate = exports.todoCreate = exports.todoShow = exports.todoIndex = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//const todos = require('../models/todo');
//todoIndex, todoShow, todoCreate, todoUpdate, todoDelete
const todoIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.status(200).send(todos);
    const users = yield prisma.user.findMany();
    res.json(users);
});
exports.todoIndex = todoIndex;
const todoShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todo = yield prisma.user.findUnique({
        where: {
            id: parseInt(id),
        }
    });
    if (!todo)
        res.status(404).send('The todo with the given ID was not found');
    res.status(200).json({ todo });
});
exports.todoShow = todoShow;
const todoCreate = (req, res) => {
    const { name, email, password, title } = req.body;
    const result = prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password,
            todos: {
                create: {
                    title: title,
                },
            },
        },
    });
    // todos.push(todo);
    res.status(201).json({ result });
};
exports.todoCreate = todoCreate;
const todoUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todoData = yield prisma.todo.findUnique({
        where: { id: Number(id) || undefined },
    });
    const updatedTodo = yield prisma.todo.update({
        where: { id: Number(id) || undefined },
        data: { title: req.body.title || undefined },
    });
    // const todo = todos.find(((t: { id: number; })=> t.id === parseInt(req.params.id)));
    // if(!todo) res.status(404).send('The todo with the given ID was not found');
    // else todo.title = req.body.title;
    res.status(200).send('Todo updated successfully').json({ updatedTodo });
});
exports.todoUpdate = todoUpdate;
const todoDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todo = yield prisma.todo.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(todo);
    // const todo = todos.find(((t: { id: number; })=> t.id === parseInt(req.params.id)));
    // if(!todo) res.status(404).send('The todo with the given ID was not found');
    // else {
    //     const index = todos.indexOf(todo);
    //     todos.splice(index, 1);
    // }
});
exports.todoDelete = todoDelete;
