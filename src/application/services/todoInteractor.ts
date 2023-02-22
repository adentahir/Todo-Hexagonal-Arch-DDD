import { todoRepository } from '../../infrastructure/repositories/todoRepository';
import todo from "../../domain/entities/todo"

exports.todoInteractor = ( todoRepository: { create: (arg0: any) => any; findByTitle: (arg0: any) => any; update: (arg0: { title: any; }) => any; delete: (arg0: { title: any; }) => any; } ) => ({
    async createTodo(todo: any) {
        
        const newTodo = await todoRepository.create(todo);
        return newTodo;
    },
    async updateTodo(todo: { title: any; }) {
        const todoExists = await todoRepository.findByTitle(todo.title);
        if (todoExists) {
            throw new Error('no changes made');
        }
        const newTodo = await todoRepository.update(todo);
        return newTodo;
    },
    async deleteTodo(todo: { title: any; }) {
        const todoExists = await todoRepository.findByTitle(todo.title);
        if (!todoExists) {
            throw new Error('Todo does not exists');
        }
        const newTodo = await todoRepository.delete(todo);
        return newTodo;
    },
});


