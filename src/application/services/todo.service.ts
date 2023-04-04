import { TodoEntity } from "@domain/entities/todo/todo.entity";
import { TodoDto, NewTodoDto } from "@app/dto/todo.dto";
import TodoRepository from "@domain/entities/todo/todo.repository";
import { sendSlackMessage } from "../../infrastructure/slack";
import { AppError, AppResult, Monadic} from '@carbonteq/hexapp';
import { env } from "process";
import * as dotenv from "dotenv";

dotenv.config();

const slackWebhookUrl = env.SLACK_WEBHOOK_URL as string;

export default class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async createTodo({data}: NewTodoDto): Promise<AppResult<TodoDto>> {

    
    const newTodo = TodoEntity.create(data.title, data.userId);
    if (newTodo.isOk()) {
    // const insertRes = await Monadic.bindAsync(newTodo, async (e) => {
    //   return await this.todoRepository.insert(e);
    // });
    const createdTodo = await this.todoRepository.insert(newTodo.unwrap());
    const message = `New Task: ${createdTodo.title}`;
    sendSlackMessage(slackWebhookUrl, message);
    return AppResult.Ok(TodoDto.from(createdTodo));
    }
    else {
      return AppResult.Err(AppError.NotFound("Todo not found"));
    } 
  }

    async getAll(): Promise<AppResult<TodoEntity[]>> {
    const todoItems = await this.todoRepository.fetchAll();
    return AppResult.Ok(todoItems);
  }

  async getById(id: TodoEntity["id"]): Promise<AppResult<TodoEntity>> {
    const todoItem = await this.todoRepository.fetch(id);
    if (!todoItem) {
      return AppResult.Err(AppError.NotFound("Todo not found"));
    }
    return AppResult.Ok(todoItem);
  }

  async update({data}: NewTodoDto): Promise<AppResult<TodoDto>> {
    
    const newTodo = TodoEntity.create(data.title, data.userId);
    const updatedTodo = await this.todoRepository.update(newTodo.unwrap());
    if (!updatedTodo) {
      return AppResult.Err(AppError.NotFound("Todo not found"));
    }
    const message = `Task #${updatedTodo.id} updated to: ${updatedTodo.title} :thumbsup:`;
    sendSlackMessage(slackWebhookUrl, message);

    return AppResult.Ok(TodoDto.from(updatedTodo));
  }

  async delete(id: TodoEntity["id"]): Promise<AppResult<TodoEntity>> {
    const deletedTodo = await this.todoRepository.delete(id);
    if (!deletedTodo) {
      return AppResult.Err(AppError.NotFound("Todo not found"));
    }
    const message = `Task #${id} completed :tada:`;
    sendSlackMessage(slackWebhookUrl, message);

    return AppResult.Ok(deletedTodo);
  }
}
