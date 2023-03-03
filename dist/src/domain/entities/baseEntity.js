"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
// todoEntity Interface abstract  + todoValidator + todoRepository + todoService + todoController -> will have the container with is using the repository and the service
// 
class BaseEntity {
    constructor(id) {
        if (id < 1 || !Number.isInteger(id)) {
            throw new Error("Invalid ID");
        }
        this.id = id;
    }
}
exports.BaseEntity = BaseEntity;
