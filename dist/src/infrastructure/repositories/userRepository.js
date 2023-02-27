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
const user_1 = __importDefault(require("../../domain/entities/user"));
const addUser_1 = __importDefault(require("../../application/interfaces/usecases/user/addUser"));
const getUser_1 = __importDefault(require("../../application/interfaces/usecases/user/getUser"));
const getUser_2 = __importDefault(require("../../application/interfaces/usecases/user/getUser"));
class userRepository extends baseRepository_1.default {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield getUser_1.default.findUser(id);
            if (!user) {
                throw new Error("User not found");
            }
            return new user_1.default(user.id, user.email, user.name);
        });
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield addUser_1.default.userCreate(entity.name, entity.email, entity.password);
            return new user_1.default(user.id, user.email, user.name);
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield getUser_2.default.findUser(id);
            if (!user) {
                throw new Error("User not found");
            }
            return new user_1.default(user.id, user.email, user.name);
        });
    }
}
exports.default = userRepository;
// Compare this snippet from src\infrastructure\repositories\userRepository.ts:
// import baseRepository from "./baseRepository";
// import User from "../../domain/entities/user";
// import add from "../../application/interfaces/usecases/user/addUser";
// 
// export default class userRepository extends baseRepository {
//     public async get(id: string): Promise<User> {
//
//
//     public async getAll(): Promise<User[]> {
//         return [new User()];
//     }
//     public async create(entity: User): Promise<User> {
//         return new User();
//     }
//     public async update(id: string, entity: User): Promise<User> {
//         return new User();
//     }
//     public async delete(id: string): Promise<User> {
//         return new User();
//     }
//
//
// }
