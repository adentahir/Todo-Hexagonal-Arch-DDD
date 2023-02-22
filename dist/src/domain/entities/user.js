"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
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
