"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoCreate = void 0;
const db_server_1 = __importDefault(require("../../utils/db.server"));
const todoCreate = (req, res) => {
    const { name, email, password, title } = req.body;
    const result = db_server_1.default.user.create({
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
    res.status(201).json({ result });
};
exports.todoCreate = todoCreate;
