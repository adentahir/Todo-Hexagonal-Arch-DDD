import { BaseEntity, IEntity } from "@domain/utils/base.entity";

export interface IOpenId extends IEntity {
  platformId: string;
  appId: string;
}

export class OpenIdEntity extends BaseEntity implements IOpenId {
  constructor(readonly platformId: string, readonly appId: string) {
    super();
  }

  serialize(): IOpenId {
    throw new Error("Method not implemented.");
  }
}
