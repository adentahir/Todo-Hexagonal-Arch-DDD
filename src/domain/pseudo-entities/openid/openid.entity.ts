import { BaseEntity, IEntity } from "@domain/utils/base.entity";

export interface IOpenId extends IEntity {
  platformId: string;
  appId: string;
}

export class OpenIdEntity extends BaseEntity implements IOpenId {
  static create(arg0: string, arg1: string) {
      throw new Error("Method not implemented.");
  }
  constructor(readonly platformId: string, readonly appId: string) {
    super();
  }

  serialize(): IOpenId {
    const { id, platformId, appId, createdAt, updatedAt } = this;
    return {
      id,
      platformId,
      appId,
      createdAt,
      updatedAt,
    };
  }
}
