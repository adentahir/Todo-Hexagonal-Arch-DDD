import { TodoEntity } from "@domain/entities/todo/todo.entity";
import {TodoDto, NewTodoDto} from "@app/dto/todo.dto";
import TodoRepository from "@domain/entities/todo/todo.repository";
import { sendSlackMessage } from "../../infrastructure/slack";
import { env } from "process";
import * as dotenv from "dotenv";
dotenv.config();


const slackWebhookUrl = env.SLACK_WEBHOOK_URL as string;

export default class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}
  
   async createTodo({ data }: NewTodoDto): Promise<TodoDto> {
    const newTodo = TodoEntity.create(data.title, data.userId)
    const createdTodo = await this.todoRepository.insert(newTodo);
    const message = `New Task: ${createdTodo.title}`;
    sendSlackMessage(slackWebhookUrl, message);
    return TodoDto.from(createdTodo);
  }

  async getAll(): Promise<TodoEntity[]> {
    return await this.todoRepository.fetchAll();
  }

  async getById(id: TodoEntity["id"]): Promise<TodoEntity> {
    return await this.todoRepository.fetch(id);
  }

  async update({ data }: NewTodoDto): Promise<TodoDto> {
    const newTodo = TodoEntity.create(data.title, data.userId) 
    const updatedTodo = await this.todoRepository.update(newTodo);
    const message = `Task #${updatedTodo.id} updated to: ${updatedTodo.title} :thumbsup:`;
    sendSlackMessage(slackWebhookUrl, message);
    return TodoDto.from(updatedTodo);
  }

  async delete(id: TodoEntity["id"]): Promise<TodoEntity> {
    const deletedTodo = await this.todoRepository.delete(id);
    const message = `Task #${id} completed :tada:`;
    sendSlackMessage(slackWebhookUrl, message);
    return deletedTodo;
  }
}
