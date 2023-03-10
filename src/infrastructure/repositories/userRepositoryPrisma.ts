import User from "../../application/user/userEntity";
import UserRepository from "../../domain/userRepository";
import db from "../../utils/db.server";
import UserDto from "../../application/user/userDto";
import authDto from "../../application/user/authDto";

class UserRepositoryPrisma extends UserRepository {
	private users: User[] = [];

	public async get(id: number): Promise<User> {
		const user = await db.user.findUnique({
			where: {
				id: id,
			},
		});
		if (!user) {
			throw new Error("User not found");
		} else return new User(user.id, user.email, user.name!);
	}

	public async getAll(): Promise<User[]> {
		const users = await db.user.findMany();
		return users.map((user) => new User(user.id, user.email, user.name!));
	}

	public async create(user: UserDto): Promise<User> {
		const newUser = await db.user.create({
			data: {
				name: user.name,
				email: user.email,
				password: user.password,
			},
		});
		return new User(newUser.id, newUser.email, newUser.name!);
	}
	public async CreateWithGoogle(authUser: authDto): Promise<User> {
		const newUser = await db.user.create({
			data: {
				email: authUser.email,
				name: authUser.name,
				googleId: authUser.googleId,
			},
		});
		return new User(
			newUser.id,
			newUser.email,
			newUser.name!,
			newUser.googleId!,
		);
	}

	public async update(id: number, userDto: UserDto): Promise<User> {
		const updatedUser = await db.user.update({
			where: { id: id },
			data: {
				name: userDto.name,
				email: userDto.email,
				password: userDto.password,
			},
		});
		return new User(updatedUser.id, updatedUser.email, updatedUser.name!);
	}

	public async delete(id: number): Promise<User> {
		const deletedUser = await db.user.delete({
			where: { id: id },
		});
		return new User(deletedUser.id, deletedUser.name!, deletedUser.email);
	}
	public async findByGoogleId(googleId: string): Promise<User> {
		const user = await db.user.findUnique({ where: { googleId } });
		if (!user) {
			throw new Error("User not found");
		} else return new User(user.id, user.email, user.name!, user.googleId!);
	}
}

export default UserRepositoryPrisma;
