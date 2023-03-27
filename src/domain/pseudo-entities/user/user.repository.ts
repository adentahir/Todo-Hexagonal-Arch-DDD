import { BaseRepository } from "@domain/utils/base.repository";
import { UserEntity } from "./user.entity";

export abstract class UserRepository extends BaseRepository<UserEntity> {
  abstract fetch(id: UserEntity["id"]): Promise<UserEntity>;
  abstract fetchAll(): Promise<UserEntity[]>;
  abstract insert(entity: UserEntity): Promise<UserEntity>;
  abstract update(entity: UserEntity): Promise<UserEntity>;
  abstract delete(id: UserEntity["id"]): Promise<UserEntity>;
}
