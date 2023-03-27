import { BaseEntity, IEntity } from "@domain/utils/base.entity";


export interface ITodo extends IEntity {
	title: string;
	userId: string;
}
export class TodoEntity extends BaseEntity implements ITodo {
	private _title: string;
	readonly userId: string;

	constructor( title: string, userId: string) {
		super();
		this._title = title;
		this.userId = userId;
	}
	static create(title: string, userId: string): TodoEntity{
		const todo = new TodoEntity(title, userId);
		return todo;
	}

	public get title(): string {
		return this._title;
	}

	public set title(title: string) {
		this._title = title;
	}

	static fromOther(other: ITodo): TodoEntity {
		const ent = new TodoEntity(other.title, other.userId);
		ent._copyBaseProps(other)
		return ent
	}

	serialize(): ITodo {
		const { id, title, userId, createdAt, updatedAt } = this;
		return {
			id,
			title,
			userId,
			createdAt,
			updatedAt
		};
	}

	  
}


