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
const todoEntity_1 = __importDefault(require("../interfaces/todoEntity"));
// todoservice will have an instance of todoRepository
class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.todoRepository = todoRepository;
    }
    create(todoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            // fix the id
            const todo = new todoEntity_1.default(0, todoDto.title, todoDto.userId);
            return yield this.todoRepository.create(todo);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.todoRepository.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.todoRepository.get(id);
        });
    }
    update(id, todoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            // Perform validation checks on todoDto here if needed
            const todo = new todoEntity_1.default(id, todoDto.title, todoDto.userId);
            return yield this.todoRepository.update(id, todo);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.todoRepository.delete(id);
        });
    }
}
exports.default = TodoService;
