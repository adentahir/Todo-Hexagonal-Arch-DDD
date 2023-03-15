import { BaseRepository } from "@domain/utils/base.repository";
import { UserEntity } from "./user.entity";

export abstract class UserRepository extends BaseRepository<UserEntity> {
  // abstract get(id: UserEntity["id"]): Promise<UserEntity>;
  // abstract getAll(): Promise<UserEntity[]>;
  // abstract create(entity: UserEntity): Promise<UserEntity>;
  // abstract update(entity: UserEntity): Promise<UserEntity>;
  // abstract delete(id: UserEntity["id"]): Promise<UserEntity>;
}
