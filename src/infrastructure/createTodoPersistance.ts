
type TodoData = {
    id: number;
    title: string;
    userId: number;
};


export interface createTodoPersistance {
    create(todo: TodoData): void;
}
