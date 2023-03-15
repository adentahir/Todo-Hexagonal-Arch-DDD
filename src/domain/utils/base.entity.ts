import { randomUUID } from "node:crypto";

export interface IEntity {
	id: string;
	createdAt: Date;
	updatedAt: Date;
}

export abstract class BaseEntity implements IEntity {
	private _id: string;
	private _updatedAt: Date;
	private _createdAt: Date;

	protected constructor() {
		this._id = randomUUID();
		this._createdAt = new Date();
		this._updatedAt = new Date();
	}

	get id() {
		return this._id;
	}

	get createdAt() {
		return this._createdAt;
	}

	get updatedAt() {
		return this._updatedAt;
	}

	protected markUpdated() {
		this._updatedAt = new Date();
	}

	protected _copyBaseProps(other: Readonly<IEntity>) {
		this._id = other.id;
		this._createdAt = other.createdAt;
		this._updatedAt = other.updatedAt;
	}

	abstract serialize(): IEntity;
}
