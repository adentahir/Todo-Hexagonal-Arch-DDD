import db from '../../../../utils/db.server';

const userUpdate = async (id: number, password: string) => {
    const user = await db.user.findFirst({
        where: {
            id: id,
        }
    })
    if (user) {
        const result = await db.user.update({
            where: {
                id: id,
            },
            data: {
                password: password,
            }
        })
        return result;
    }
    return null;
}