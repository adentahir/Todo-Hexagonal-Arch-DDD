"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoDelete = exports.todoUpdate = exports.todoCreate = exports.todoShow = exports.todoIndex = void 0;
const todos = require('../models/todo');
//todoIndex, todoShow, todoCreate, todoUpdate, todoDelete
const todoIndex = (req, res) => {
    res.status(200).send(todos);
};
exports.todoIndex = todoIndex;
const todoShow = (req, res) => {
    const todo = todos.find(((t) => t.id === parseInt(req.params.id)));
    if (!todo)
        res.status(404).send('The todo with the given ID was not found');
    res.status(200).json({ todo });
};
exports.todoShow = todoShow;
const todoCreate = (req, res) => {
    const todo = {
        id: todos.length + 1,
        title: req.body.title
    };
    todos.push(todo);
    res.status(201).json({ todos });
};
exports.todoCreate = todoCreate;
const todoUpdate = (req, res) => {
    const todo = todos.find(((t) => t.id === parseInt(req.params.id)));
    if (!todo)
        res.status(404).send('The todo with the given ID was not found');
    else
        todo.title = req.body.title;
    res.status(200).send('Todo updated successfully' + todo);
};
exports.todoUpdate = todoUpdate;
const todoDelete = (req, res) => {
    const todo = todos.find(((t) => t.id === parseInt(req.params.id)));
    if (!todo)
        res.status(404).send('The todo with the given ID was not found');
    else {
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
    }
};
exports.todoDelete = todoDelete;
