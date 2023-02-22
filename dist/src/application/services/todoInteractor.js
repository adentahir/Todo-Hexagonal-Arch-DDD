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
exports.todoInteractor = (todoRepository) => ({
    createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTodo = yield todoRepository.create(todo);
            return newTodo;
        });
    },
    updateTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const todoExists = yield todoRepository.findByTitle(todo.title);
            if (todoExists) {
                throw new Error('no changes made');
            }
            const newTodo = yield todoRepository.update(todo);
            return newTodo;
        });
    },
    deleteTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const todoExists = yield todoRepository.findByTitle(todo.title);
            if (!todoExists) {
                throw new Error('Todo does not exists');
            }
            const newTodo = yield todoRepository.delete(todo);
            return newTodo;
        });
    },
});
