
import db from '../../../../utils/db.server';

const todoUpdate = async (id: number, title: string) => {

    
    const todoData = await db.todo.findUnique({
        where: { id: id || undefined },
    })
    const updatedTodo = await db.todo.update({
        where: { id: id || undefined },
        data: { title: title || undefined },
    })

    return updatedTodo;
    
    }

    export { todoUpdate };