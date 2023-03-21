import EmailVo from "@domain/value-objects/email.vo";
import { BaseEntity, IEntity } from "@domain/utils/base.entity";

export interface IUser extends IEntity {
	email: string;
	password: string;
	name: string;
	verified: boolean;
}

export class UserEntity extends BaseEntity implements IUser {
	private _email: EmailVo;
	private _password: string;
	private _verified: boolean;

	readonly name: string;

	private constructor(email: string, name: string, password: string) {
		super();

		this._email = EmailVo.create(email);
		this.name = name;
		this._password = password;
		this._verified = false;
	}

	static create(email: string, name: string): UserEntity {
		const user = new UserEntity(email, name, "");

		return user;
	}

	static createWithPassword(
		email: string,
		name: string,
		password: string,
	): UserEntity {
		const user = new UserEntity(email, name, password);
		user._verified = true;

		return user;
	}

	get email() {
		return this._email.serialize();
	}

	get password() {
		return this._password;
	}

	get verified() {
		return this._verified;
	}

	updateEmail(e: string) {
		const new_email_vo = EmailVo.create(e);

		this._email = new_email_vo;

		this.markUpdated();
	}

	setPassword(newPassword: string) {
		this._password = newPassword;
		this._verified = true;

		this.markUpdated();
	}

	// for repo ops
	static from(other: Readonly<IUser>): UserEntity {
		const ent = new UserEntity(other.email, other.name, other.password);

		ent._copyBaseProps(other);

		return ent;
	}

	serialize(): IUser {
		const {id, email, name, password, verified, createdAt, updatedAt} = this
		return {
			id,
			email,
			name,
			password,
			verified,
			createdAt,
			updatedAt
		};	
	}
}
