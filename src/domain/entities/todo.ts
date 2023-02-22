class todo{
    constructor(
        private id: number,
        private title: string,
        private userId: number,
    ) {}
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

