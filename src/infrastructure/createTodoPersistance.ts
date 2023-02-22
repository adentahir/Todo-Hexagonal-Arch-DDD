
type TodoData = {
    id: number;
    title: string;
    userId: number;
};


export interface createTodoPersistance {
    create(todo: TodoData): void;
}

// export todoData {
//     export(todo: TodoData): void;
//     constructor{
//         private exportTodoData: TodoData;
//     }
//     exexute(){
//         const todo = this.exportTodoData;

        
// }
