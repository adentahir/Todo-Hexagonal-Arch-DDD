"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    constructor(id, email, name) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }
}
exports.default = user;
