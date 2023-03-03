import EmailVo from "../valueObjects/emailValueObject";
class user {
    id: number;
    email: string;
    password!: string;
    name: string;

    constructor(id: number, email: string, name: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    updateEmail(e: string){
        const new_email_vo = new EmailVo(e)

        if(new_email_vo.is_error()){
            return;
        }

        this.email = new_email_vo.value
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
