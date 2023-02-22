exports.createUserInteractor = ( userRepository: { findByEmail: (arg0: any) => any; create: (arg0: { email: any; }) => any; } ) => ({
    async createUser(user: { email: any; }) {
        const userExists = await userRepository.findByEmail(user.email);
        if (userExists) {
            throw new Error('User already exists');
        }
        const newUser = await userRepository.create(user);
        return newUser;
    },
});

