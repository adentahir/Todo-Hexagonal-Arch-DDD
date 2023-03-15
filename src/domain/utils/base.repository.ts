import { BaseEntity } from "./base.entity";

export abstract class BaseRepository<T extends BaseEntity> {
	abstract fetch(id: T["id"]): Promise<T>;
	abstract fetchAll(): Promise<T[]>;
	abstract insert(item: T): Promise<T>;
	abstract update(item: T): Promise<T>;
	abstract delete(id: T["id"]): Promise<T>;
}
