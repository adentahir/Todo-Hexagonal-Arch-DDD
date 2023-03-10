import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "process";

interface GooglePayload {
	email: string;
	name: string;
	googleId: string;
}

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ message: "Missing authorization header" });
	}

	const token = authHeader.split(" ")[1];
	if (!token) {
		return res.status(401).json({ message: "Missing token" });
	}

	const googlePayload = verifyGoogleToken(token);
	if (!googlePayload) {
		return res.status(401).json({ message: "Invalid token" });
	}

	const user = {
		email: googlePayload.email,
		name: googlePayload.name,
		googleId: googlePayload.googleId,
	};
	req.user = user;
	next();
};

const verifyGoogleToken = (token: string): GooglePayload | null => {
	try {
		const decodedToken = jwt.verify(
			token,
			env.jwt_secret as string,
		) as GooglePayload;
		if (!decodedToken?.email) {
			return null;
		}
		return decodedToken;
	} catch (error) {
		console.error("Error verifying token: ", error);
		return null;
	}
};
