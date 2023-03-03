"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emailValueObject_1 = __importDefault(require("../valueObjects/emailValueObject"));
class user {
    constructor(id, email, name) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    updateEmail(e) {
        const new_email_vo = new emailValueObject_1.default(e);
        if (new_email_vo.is_error()) {
            return;
        }
        this.email = new_email_vo.value;
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
