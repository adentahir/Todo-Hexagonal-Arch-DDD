"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoValidator = void 0;
class TodoValidator {
    static validateId(id) {
        if (typeof id !== "number" || id < 1) {
            throw new Error("Invalid ID");
        }
        return id;
    }
    static validateTitle(title) {
        if (typeof title !== "string" || title.trim().length === 0) {
            throw new Error("Invalid title");
        }
        return title.trim();
    }
    static validateUserId(userId) {
        if (typeof userId !== "number" || userId < 1) {
            throw new Error("Invalid user ID");
        }
        return userId;
    }
}
exports.TodoValidator = TodoValidator;
