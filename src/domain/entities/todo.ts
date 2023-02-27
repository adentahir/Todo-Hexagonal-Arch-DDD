 
 class todo{
    private id: number;
    private title: string;
    private userId: number;

    constructor(id: number, title: string, userId: number) {
        this.id = id;
        this.title = title;
        this.userId = userId;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }

    public setTitle(title: string): void {
        this.title = title;
    }
    public setUserId(userId: number): void {
        this.userId = userId;
    }
    
    public getTitle(): string {
        return this.title;
    }
    public getUserId(): number {
        return this.userId;
    }
}
export default todo;

