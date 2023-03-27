import { TodoEntity } from "@domain/entities/todo/todo.entity";
import { TodoDto, NewTodoDto } from "@app/dto/todo.dto";
import TodoRepository from "@domain/entities/todo/todo.repository";
import { sendSlackMessage } from "../../infrastructure/slack";
import { Ok, Err, Result } from 'oxide.ts';
import { env } from "process";
import * as dotenv from "dotenv";
import { TodoNotFound, InvalidTodoData } from "@domain/entities/todo/todo.exceptions";

dotenv.config();

const slackWebhookUrl = env.SLACK_WEBHOOK_URL as string;

export default class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async createTodo({data}: NewTodoDto): Promise<Result<TodoDto, InvalidTodoData>> {
    const newTodo = TodoEntity.create(data.title, data.userId);
    const createdTodo = await this.todoRepository.insert(newTodo);
    const message = `New Task: ${createdTodo.title}`;
    sendSlackMessage(slackWebhookUrl, message);

    return Ok(TodoDto.from(createdTodo));
  }

  async getAll(): Promise<Result<TodoEntity[], never>> {
    const todoItems = await this.todoRepository.fetchAll();
    return Ok(todoItems);
  }

  async getById(id: TodoEntity["id"]): Promise<Result<TodoEntity, TodoNotFound>> {
    const todoItem = await this.todoRepository.fetch(id);
    if (!todoItem) {
      return Err(new TodoNotFound());
    }
    return Ok(todoItem);
  }

  async update({data}: NewTodoDto): Promise<Result<TodoDto, InvalidTodoData | TodoNotFound>> {
    
    const newTodo = TodoEntity.create(data.title, data.userId);
    const updatedTodo = await this.todoRepository.update(newTodo);
    if (!updatedTodo) {
      return Err(new TodoNotFound());
    }
    const message = `Task #${updatedTodo.id} updated to: ${updatedTodo.title} :thumbsup:`;
    sendSlackMessage(slackWebhookUrl, message);

    return Ok(TodoDto.from(updatedTodo));
  }

  async delete(id: TodoEntity["id"]): Promise<Result<TodoEntity, TodoNotFound>> {
    const deletedTodo = await this.todoRepository.delete(id);
    if (!deletedTodo) {
      return Err(new TodoNotFound());
    }
    const message = `Task #${id} completed :tada:`;
    sendSlackMessage(slackWebhookUrl, message);

    return Ok(deletedTodo);
  }
}
