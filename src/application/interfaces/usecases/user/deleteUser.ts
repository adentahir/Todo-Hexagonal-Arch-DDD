import db from '../../../../utils/db.server';

const userDelete = async (id: number) => {
    const user = await db.user.delete({
        where: {
            id: id,
        }
    })
    return user;
}

export default { userDelete };