class user {
    id: number;
    email: string;
    password: string;

    constructor(id: number , email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
    
}

export default user;
