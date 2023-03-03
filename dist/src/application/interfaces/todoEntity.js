"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const baseEntity_1 = require("../../domain/entities/baseEntity");
const todoValidator_1 = require("./todoValidator");
class Todo extends baseEntity_1.BaseEntity {
    constructor(id, title, userId) {
        super(id);
        this._title = todoValidator_1.TodoValidator.validateTitle(title);
        this.userId = todoValidator_1.TodoValidator.validateUserId(userId);
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = todoValidator_1.TodoValidator.validateTitle(title);
    }
    static fromOther(other) {
        const { id, title, userId } = other;
        return new Todo(id, title, userId);
    }
    serialize() {
        const { id, title, userId } = this;
        return {
            id,
            title,
            userId,
        };
    }
    static deserialize(data) {
        if (typeof data !== "object" || data === null) {
            throw new Error("Invalid data format");
        }
        const { id, title, userId } = data;
        return new Todo(todoValidator_1.TodoValidator.validateId(id), todoValidator_1.TodoValidator.validateTitle(title), todoValidator_1.TodoValidator.validateUserId(userId));
    }
}
exports.Todo = Todo;
exports.default = Todo;
// export function isPositiveInteger(value: any): value is number {
//   return typeof value === "number" && Number.isInteger(value) && value > 0;
// }
