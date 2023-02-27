import db from '../../../../utils/db.server';

const findUser = async (id: number) => {
    const user = await db.user.findFirst({
        where: {
            id: id,
        }
    })
    if (user) {
        return user;
    }
}

export default { findUser };