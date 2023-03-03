import  {  BaseEntity  }  from "../domain/entities/baseEntity";

abstract class BaseRepository<T extends BaseEntity>{
    abstract get(id: number): Promise<T>;
    abstract getAll(): Promise<T[]>;
    abstract create(item: T): Promise<T>;
    abstract update(id: number, item: T): Promise<T>;
    abstract delete(id: number): Promise<T>;
}
export default BaseRepository