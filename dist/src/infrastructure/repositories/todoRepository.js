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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRepository = void 0;
const db_server_1 = __importDefault(require("../../utils/db.server"));
class todoRepository {
    static create(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTodo = yield db_server_1.default.todo.create({
                data: {
                    title: todo.title,
                    userId: todo.userId,
                },
            });
            return newTodo;
        });
    }
    static findByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield db_server_1.default.todo.findUnique({
                where: {},
            });
            return todo;
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield db_server_1.default.todo.findMany();
            return todos;
        });
    }
    static update(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedTodo = yield db_server_1.default.todo.update({
                where: {
                    id: todo.id,
                },
                data: {
                    title: todo.title,
                },
            });
            return updatedTodo;
        });
    }
    static delete(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedTodo = yield db_server_1.default.todo.delete({
                where: {
                    id: todo.id,
                },
            });
            return deletedTodo;
        });
    }
}
exports.todoRepository = todoRepository;
