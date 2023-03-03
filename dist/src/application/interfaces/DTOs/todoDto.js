"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create todo dto will be responsible for the validation and the guards
const todoValidator_1 = require("../todoValidator");
class TodoDto {
    constructor(title, userId) {
        this.title = todoValidator_1.TodoValidator.validateTitle(title);
        this.userId = todoValidator_1.TodoValidator.validateUserId(userId);
    }
}
exports.default = TodoDto;
