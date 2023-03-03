class DateTimeValueObject {
  private _value: Date;

  constructor(value: Date) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

export default DateTimeValueObject;