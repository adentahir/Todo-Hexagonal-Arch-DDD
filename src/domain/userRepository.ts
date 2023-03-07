import baseRepository from "./baseRepository";
import User from "../application/user/userEntity";
import UserDto, { IUserDto } from "../application/user/userDto";

export default abstract class userRepository extends baseRepository<User> {
	abstract get(id: number): Promise<User>;
	abstract getAll(): Promise<User[]>;
	abstract create(entity: IUserDto): Promise<User>;
	abstract update(id: number, entity: User): Promise<User>;
	abstract delete(id: number): Promise<User>;
}
