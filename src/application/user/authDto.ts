export interface IauthDto {
	email: string;
	name: string;
	googleId: string;
}

class authDto implements IauthDto {
	email: string;
	googleId: string;
	name: string;
	constructor(email: string, name: string, googleId: string) {
		this.email = email;
		this.googleId = googleId;
		this.name = name;
	}
}

export default authDto;
