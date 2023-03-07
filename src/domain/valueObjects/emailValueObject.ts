class EmailValueObject {
	is_error() {
		if (
			!(this._value.includes("@") && this._value.includes(".")) ||
			this._value.length < 5
		) {
			return true;
		}
	}
	private _value: string;

	constructor(value: string) {
		this._value = value;
	}

	get value() {
		return this._value;
	}
}

export default EmailValueObject;
