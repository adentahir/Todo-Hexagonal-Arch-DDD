import { InvalidData } from "@domain/utils/base.exceptions";
import { BaseValueObject } from "@domain/utils/base.value-object";

export class InvalidEmail extends InvalidData {
	constructor(value: string) {
		super(`Invalid Email: <${value}>`);
	}
}

class EmailValueObject extends BaseValueObject<string> {
	private _value: string;

	private constructor(value: string) {
		super();
		this._value = value;
	}

	// TODO: add result monad
	static create(email: string): EmailValueObject {
		EmailValueObject.validate(email);

		return new EmailValueObject(email);
	}

	private static validate(value: string) {
		if (!(value.includes("@") && value.includes(".")) || value.length < 5) {
			throw new InvalidEmail(value);
		}
	}

	serialize(): string {
		return this._value;
	}
}

export default EmailValueObject;
