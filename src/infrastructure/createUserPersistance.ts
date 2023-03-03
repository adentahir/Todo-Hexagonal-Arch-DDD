type UserData = {
    id: string;
    name: string;
    email: string;
    password: string;
//    todos: TodoData[];
};
 

export interface createUserPersistance {
    create(user: UserData): void;
}










