export class TodoValidator {
    static validateId(id: number): number {
      if (typeof id !== "number" || id < 1) {
        throw new Error("Invalid ID");
      }
      return id;
    }
  
    static validateTitle(title: string): string {
      if (typeof title !== "string" || title.trim().length === 0) {
        throw new Error("Invalid title");
      }
      return title.trim();
    }
  
    static validateUserId(userId: number): number {
      if (typeof userId !== "number" || userId < 1) {
        throw new Error("Invalid user ID");
      }
      return userId;
    }
  }