import baseRepository from "./baseRepository";
import User from "../application/user/userEntity";
import UserDto, { IUserDto } from "../application/user/userDto";
import { IauthDto } from "../application/user/authDto";

export default abstract class userRepository extends baseRepository<User> {
	abstract get(id: number): Promise<User>;
	abstract getAll(): Promise<User[]>;
	abstract create(entity: IUserDto): Promise<User>;
	abstract CreateWithGoogle(entity: IauthDto): Promise<User>;
	abstract update(id: number, entity: User): Promise<User>;
	abstract delete(id: number): Promise<User>;
	abstract findByGoogleId(googleId: string): Promise<User>;
}
