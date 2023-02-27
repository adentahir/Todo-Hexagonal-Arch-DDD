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
const baseRepository_1 = __importDefault(require("./baseRepository"));
const todo_1 = __importDefault(require("../../domain/entities/todo"));
const addTodo_1 = __importDefault(require("../../application/interfaces/usecases/todo/addTodo"));
const getTodo_1 = __importDefault(require("../../application/interfaces/usecases/todo/getTodo"));
const getAll_1 = __importDefault(require("../../application/interfaces/usecases/todo/getAll"));
const deleteTodo_1 = __importDefault(require("../../application/interfaces/usecases/todo/deleteTodo"));
const editTodo_1 = __importDefault(require("../../application/interfaces/usecases/todo/editTodo"));
class todoRepository extends baseRepository_1.default {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield getTodo_1.default.todoShow(id);
            return new todo_1.default(todo.id, todo.title, todo.userId);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield getAll_1.default.todoIndex();
            return todos.map((todo) => new todo_1.default(todo.id, todo.title, todo.userId));
        });
    }
    //getUserId() is not defined
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield addTodo_1.default.todoCreate(entity.getTitle(), entity.getUserId());
            return new todo_1.default(todo.id, todo.title, todo.userId);
        });
    }
    update(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield editTodo_1.default.todoUpdate(id, entity.getTitle());
            return new todo_1.default(todo.id, todo.title, todo.userId);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield deleteTodo_1.default.todoDelete(id);
            return new todo_1.default(todo.id, todo.title, todo.userId);
        });
    }
}
exports.default = todoRepository;
