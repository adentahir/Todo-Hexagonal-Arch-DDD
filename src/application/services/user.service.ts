import { UserEntity } from "@domain/pseudo-entities/user/user.entity";
// import request from "../../infrastructure/mailjet";
import { NewUserDto, UserDto } from "@app/dto/user.dto";
import { UserRepository } from "@domain/pseudo-entities/user/user.repository";

export class UserService {
	constructor(
		private readonly userRepository: UserRepository,
		// add mail service
	) {
		this.userRepository = userRepository;
	}

	async createNewUser({ data }: NewUserDto): Promise<UserDto> {
		const newUser = UserEntity.createWithPassword(
			data.email,
			data.name,
			data.password,
		);

		const user = await this.userRepository.insert(newUser);

		return UserDto.from(user);
	}

	async createOpenIdUser(): UserDto {
		const s = UserEntity.create("", "");
	}

	// async create(userDto: IUserDto): Promise<User> {
	// 	await request();
	// 	return await this.userRepository.create(userDto);
	// }
	// async createGoogleUser(authDto: authDto): Promise<User> {
	// 	return await this.userRepository.CreateWithGoogle(authDto);
	// }
	// async getUser(id: number): Promise<User> {
	// 	return await this.userRepository.get(id);
	// }
	// async getUserWithGoogle(googleId: string): Promise<User> {
	// 	return await this.userRepository.findByGoogleId(googleId);
	// }
}
