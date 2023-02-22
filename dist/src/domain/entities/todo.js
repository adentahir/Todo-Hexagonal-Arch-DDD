"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class todo {
    constructor(id, title, userId) {
        this.id = id;
        this.title = title;
        this.userId = userId;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    setTitle(title) {
        this.title = title;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    getTitle() {
        return this.title;
    }
    getUserId() {
        return this.userId;
    }
}
exports.default = todo;
