export class UserValidator {
	static validateEmail(email: string): string {
		if (!email) {
			throw new Error("Email is required");
		}
		if (!email.includes("@")) {
			throw new Error("Email must contain @");
		}
		if (!email.includes(".")) {
			throw new Error("Email must contain .");
		}

		return email;
	}
	static validateName(name: string): string {
		if (!name) {
			throw new Error("Name is required");
		}
		if (name.length < 3) {
			throw new Error("Name must be at least 3 characters");
		}
		return name;
	}
	static validatePassword(password: string): string {
		if (!password) {
			throw new Error("Password is required");
		}
		if (password.length < 6) {
			throw new Error("Password must be at least 6 characters");
		}
		return password;
	}
}
