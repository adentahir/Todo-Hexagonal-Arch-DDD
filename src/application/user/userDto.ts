import { UserValidator } from "./userValidator";
export interface IUserDto {
	email: string;
	name: string;
	password: string;
}
class UserDto implements IUserDto {
	email: string;
	name: string;
	password: string;
	constructor(email: string, name: string, password: string) {
		this.email = UserValidator.validateEmail(email);
		this.name = UserValidator.validateName(name);
		this.password = UserValidator.validatePassword(password);
	}
}
export default UserDto;
