import User from "./userEntity";
import { IUserDto } from "./userDto";
import UserRepository from "../../domain/userRepository";

export default class UserService {
	constructor(private readonly userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async create(userDto: IUserDto): Promise<User> {
		return await this.userRepository.create(userDto);
	}
	async getUser(id: number): Promise<User> {
		return await this.userRepository.get(id);
	}
}
