// todoEntity Interface abstract  + todoValidator + todoRepository + todoService + todoController -> will have the container with is using the repository and the service
//
export abstract class BaseEntity {
	readonly id: number;

	constructor(id: number) {
		if (id < 1 || !Number.isInteger(id)) {
			throw new Error("Invalid ID");
		}
		this.id = id;
	}
}
