
import db from '../../../../utils/db.server';

const todoDelete = async (id: number) => {

    const todo = await db.todo.delete({
      where: {
        id: Number(id),
      },
    })
    return todo;
}

export default { todoDelete };