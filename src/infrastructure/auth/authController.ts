import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import { env } from "process";

const client = new OAuth2Client(
	env.GOOGLE_OAUTH_CLIENT_ID,
	env.GOOGLE_OAUTH_CLIENT_SECRET,
	env.GOOGLE_OAUTH_REDIRECT_URI,
);

const signInWithGoogle = async (idToken: string): Promise<unknown> => {
	try {
		const ticket = await client.verifyIdToken({
			idToken,
			audience: env.GOOGLE_OAUTH_CLIENT_ID,
		});
		const payload = ticket.getPayload();
		const userId = payload!.sub;
		const email = payload!.email;
		const name = payload!.name;

		// TODO: Use retrieved user data to create or authenticate user in your application

		return { userId, email, name };
	} catch (error) {
		console.error(error);
		return { error: "Authentication error" };
	}
};

export default signInWithGoogle;
