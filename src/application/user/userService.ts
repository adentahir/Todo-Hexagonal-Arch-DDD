import User from "./userEntity";
import { IUserDto } from "./userDto";
import UserRepository from "../../domain/userRepository";
import authDto from "./authDto";

export default class UserService {
	constructor(private readonly userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async create(userDto: IUserDto): Promise<User> {
		return await this.userRepository.create(userDto);
	}
	async createGoogleUser(authDto: authDto): Promise<User> {
		return await this.userRepository.CreateWithGoogle(authDto);
	}
	async getUser(id: number): Promise<User> {
		return await this.userRepository.get(id);
	}
	async getUserWithGoogle(googleId: string): Promise<User> {
		return await this.userRepository.findByGoogleId(googleId);
	}
}
