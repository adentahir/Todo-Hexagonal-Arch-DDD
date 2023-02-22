import db from '../../../../utils/db.server';


const todoShow = async (id: number) => {
    
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        }
    })

    return todo;
   
}

export { todoShow };