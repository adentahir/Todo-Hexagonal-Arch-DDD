import { IUser, UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { UserRepository } from "@domain/pseudo-entities/user/user.repository";
import { PrismaClient } from "@prisma/client";


export class UserRepositoryPrisma extends UserRepository {

	constructor(private readonly db: PrismaClient) {
		super();
	}

	async fetch(id: string): Promise<UserEntity> {
		try {
			const user = await this.db.user.findFirst({ where: { id } });
			return UserEntity.from(user as IUser);
		  } catch (error : unknown) {
			throw new Error(`Failed to fetch user with id ${id}: ${error}`);
		  }
	}
	async fetchAll(): Promise<UserEntity[]> {
		try {
			const users = await this.db.user.findMany();
			return users.map((user) => UserEntity.from(user as IUser));
		  } catch (error : unknown) {
			throw new Error(`Failed to fetch all users: ${error}`);
		  }
	}
	async insert(entity: UserEntity): Promise<UserEntity> {
		
		try {
			const user = await this.db.user.create({
			  data: {
				email: entity.email,
				name: entity.name,
				password: entity.password,
			  },
			});
			return UserEntity.from(user as unknown as IUser);
		  } catch (err : unknown) {
			throw new Error(`Failed to insert user: ${err}`);
		  }
	}
	async update(entity: UserEntity): Promise<UserEntity> {
		try {
			const user = await this.db.user.update({
			  where: { id: entity.id },
			  data: {
				email: entity.email,
				name: entity.name,
				password: entity.password,
			  },
			});
			return UserEntity.from(user as unknown as IUser);
		  } catch (error: unknown) {
			throw new Error(`Failed to update user with id ${entity.id}: ${error}`);
		  }
	}
	async delete(id: string): Promise<UserEntity> {
		try {
			const user = await this.db.user.delete({ where: { id } });
			return UserEntity.from(user as unknown as IUser);
		  } catch (err: unknown) {
			throw new Error(`Failed to delete user with id ${id}: ${{err}}`);
		  }
	}
	
	}
	
