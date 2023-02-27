import baseRepository from "./baseRepository";
import User from "../../domain/entities/user";
import add from "../../application/interfaces/usecases/user/addUser";
import get from "../../application/interfaces/usecases/user/getUser";
import find from "../../application/interfaces/usecases/user/getUser";


export default class userRepository extends baseRepository<User> {
    public async get(id: number): Promise<User> {
        const user = await get.findUser(id);
        if (!user)
        {
            throw new Error("User not found");
        }
        return new User(user.id, user.email, user.name);
        
    }
    public async create(entity: User): Promise<User> {
        const user = await add.userCreate(entity.name, entity.email, entity.password);
        return new User(user.id, user.email, user.name);
    }
    public async getUser(id: number): Promise<User> {
        const user = await find.findUser(id);
        if(!user)
        {
            throw new Error("User not found");
        }
        return new User(user.id, user.email, user.name);
    }
}




// Compare this snippet from src\infrastructure\repositories\userRepository.ts:
// import baseRepository from "./baseRepository";
// import User from "../../domain/entities/user";
// import add from "../../application/interfaces/usecases/user/addUser";
// 
// export default class userRepository extends baseRepository {
//     public async get(id: string): Promise<User> {
//
//
//     public async getAll(): Promise<User[]> {
//         return [new User()];
//     }
//     public async create(entity: User): Promise<User> {
//         return new User();
//     }
//     public async update(id: string, entity: User): Promise<User> {
//         return new User();
//     }
//     public async delete(id: string): Promise<User> {
//         return new User();
//     }
//
//
// }
