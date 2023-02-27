import  IRead  from "../../application/interfaces/Iwrite";
import  IWrite  from "../../application/interfaces/Iwrite";

abstract class baseRepository<T> implements IRead<T>, IWrite<T>{
    public async find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    public async findOne(id: number): Promise<T> {
        throw new Error("Method not implemented.");
    }
    public async create(item: T): Promise<T> {
        throw new Error("Method not implemented."); 
    }
    public async update(id: number, item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    public async delete(id: number): Promise<T> {
        throw new Error("Method not implemented.");
    }
}
export default baseRepository;