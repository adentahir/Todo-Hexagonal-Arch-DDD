"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_server_1 = __importDefault(require("../../../../utils/db.server"));
const todoCreate = (title, userId) => {
    const result = db_server_1.default.todo.create({
        data: {
            title: title,
            userId: userId,
        }
    });
    return result;
};
exports.default = { todoCreate };
