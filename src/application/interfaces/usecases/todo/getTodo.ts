import db from '../../../../utils/db.server';


const todoShow = async (id: number) => {
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        }
    })
    if (!todo) {
        throw new Error('Todo not found');
    }

    else return todo;  
}
export default { todoShow };
