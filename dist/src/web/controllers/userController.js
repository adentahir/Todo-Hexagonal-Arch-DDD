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
exports.getUser = exports.userCreate = void 0;
const user_1 = __importDefault(require("../../domain/entities/user"));
const userRepository_1 = __importDefault(require("../../infrastructure/repositories/userRepository"));
const userCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const repo = new userRepository_1.default();
    const result = yield repo.create(new user_1.default(name, email, password));
    res.status(201).json({ result });
});
exports.userCreate = userCreate;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const repo = new userRepository_1.default();
    const result = yield repo.get(Number(id));
    res.status(200).json({ result });
});
exports.getUser = getUser;
