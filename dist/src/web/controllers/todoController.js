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
exports.todoDelete = exports.todoUpdate = exports.todoCreate = exports.todoShow = exports.todoIndex = void 0;
const todo_1 = __importDefault(require("../../domain/entities/todo"));
const todoRepository_1 = __importDefault(require("../../infrastructure/repositories/todoRepository"));
const todoIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoRepository = new todoRepository_1.default();
    const todos = yield todoRepository.getAll();
    res.json(todos);
});
exports.todoIndex = todoIndex;
const todoShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todoRepository = new todoRepository_1.default();
    const todo = yield todoRepository.get(Number(id));
    res.status(200).json({ todo });
});
exports.todoShow = todoShow;
const todoCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, userId } = req.body;
    const todoRepository = new todoRepository_1.default();
    const todo = yield todoRepository.create(new todo_1.default(0, title, userId));
    res.status(201).json({ todo });
});
exports.todoCreate = todoCreate;
const todoUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title } = req.body;
    const todoRepository = new todoRepository_1.default();
    const todo = yield todoRepository.update(Number(id), new todo_1.default(Number(id), title, 0));
    res.status(200).send('Todo updated successfully');
});
exports.todoUpdate = todoUpdate;
const todoDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todoRepository = new todoRepository_1.default();
    const todo = yield todoRepository.delete(Number(id));
    res.status(200).send('Todo deleted successfully');
});
exports.todoDelete = todoDelete;
// const todoIndex = async (req : Request, res : Response) => {
//     const todos = await db.todo.findMany()
//     res.json(todos)
// }
// const todoShow = async (req : Request, res : Response) => {
//     const { id } = req.params
//     const todo = await db.todo.findUnique({
//         where: {
//             id: parseInt(id),
//         }
//     })
//     if(!todo) res.status(404).send('The todo with the given ID was not found');
//     res.status(200).json({todo});
// }
// const todoCreate = (req : Request, res : Response) => {
//     const {name, email, password, title} = req.body
//     const result = db.user.create({
//         data: {
//             name: name,
//             email: email,
//             password: password,
//             todos: {
//                 create: {
//                     title: title,
//                 },
//             },
//         },
//     })
//     res.status(201).json({result});
// }
// const todoUpdate = async (req : Request, res : Response) => {
//     const { id } = req.params
//     const todoData = await db.todo.findUnique({
//         where: { id: Number(id) || undefined },
//     })
//     const updatedTodo = await db.todo.update({
//         where: { id: Number(id) || undefined },
//         data: { title: req.body.title || undefined },
//     })
//     res.status(200).send('Todo updated successfully').json({updatedTodo});
//     }
// const todoDelete = async (req : Request, res : Response) => {
//     const { id } = req.params
//     const todo = await db.todo.delete({
//       where: {
//         id: Number(id),
//       },
//     })
//     res.json(todo)
// }
