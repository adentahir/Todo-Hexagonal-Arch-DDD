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
Object.defineProperty(exports, "__esModule", { value: true });
class todoController {
    constructor(todoService) {
        this.todoIndex = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const todoItems = yield this.todoService.getAll();
                res.status(200).json(todoItems);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
        this.todoShow = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const todoItem = yield this.todoService.getById(Number(id));
                res.status(201).json(todoItem);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
        this.todoCreate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const todoDto = req.body;
            try {
                const todoItem = yield this.todoService.create(todoDto);
                res.status(201).json(todoItem.serialize());
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
        this.todoUpdate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const todoDto = req.body;
            try {
                const todoItem = yield this.todoService.update(Number(id), todoDto);
                res.status(200).json(todoItem);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
        this.todoDelete = ({ params: { id } }, { status }) => __awaiter(this, void 0, void 0, function* () {
            try {
                const todoItem = yield this.todoService.delete(Number(id));
                status(200).json(todoItem);
            }
            catch (err) {
                status(500).json({ message: Error });
            }
        });
        this.todoService = todoService;
    }
}
exports.default = todoController;
