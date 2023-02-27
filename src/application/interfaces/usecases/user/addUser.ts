import db from '../../../../utils/db.server';

 const userCreate = async (name: string, email: string, password: string) => {
    const user = await db.user.create({
        data: {
            name: name,
            email: email,
            password: password,
        }
    })
    return user;
}

export default { userCreate };
