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
const todoEntity_1 = __importDefault(require("../../application/interfaces/todoEntity"));
const todoRepository_1 = __importDefault(require("./todoRepository"));
const db_server_1 = __importDefault(require("../../utils/db.server"));
class TodoRepositoryImpl extends todoRepository_1.default {
    constructor() {
        super(...arguments);
        this.todos = [];
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield db_server_1.default.todo.findUnique({
                where: {
                    id: id,
                }
            });
            if (!todo) {
                throw new Error('Todo not found');
            }
            else
                return new todoEntity_1.default(todo.id, todo.title, todo.userId);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield db_server_1.default.todo.findMany();
            return todos.map(todo => new todoEntity_1.default(todo.id, todo.title, todo.userId));
        });
    }
    create(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTodo = yield db_server_1.default.todo.create({
                data: {
                    title: todo.title,
                    userId: todo.userId
                }
            });
            return new todoEntity_1.default(newTodo.id, newTodo.title, newTodo.userId);
        });
    }
    update(id, todoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedTodo = yield db_server_1.default.todo.update({
                where: { id: id },
                data: { title: todoDto.title },
            });
            return new todoEntity_1.default(updatedTodo.id, updatedTodo.title, updatedTodo.userId);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedTodo = yield db_server_1.default.todo.delete({
                where: { id: id }
            });
            return new todoEntity_1.default(deletedTodo.id, deletedTodo.title, deletedTodo.userId);
        });
    }
}
exports.default = TodoRepositoryImpl;
