import EmailVo from "../../domain/valueObjects/emailValueObject";
import { BaseEntity } from "../../domain/entities/baseEntity";

export interface IUser {
	id: number;
	email: string;
	password: string;
	name: string;
	googleId?: string;
}

class user extends BaseEntity implements IUser {
	id!: number;
	email: string;
	password!: string;
	name: string;
	googleId?: string;

	constructor(id: number, email: string, name: string, googleId?: string) {
		super(id);
		this.email = email;
		this.name = name;
	}

	updateEmail(e: string) {
		const new_email_vo = new EmailVo(e);

		if (new_email_vo.is_error()) {
			return;
		}

		this.email = new_email_vo.value;
	}

	public getId(): number {
		return this.id;
	}
	public setId(id: number): void {
		this.id = id;
	}

	public setEmail(email: string): void {
		this.email = email;
	}
	public setPassword(password: string): void {
		this.password = password;
	}
}

export default user;
