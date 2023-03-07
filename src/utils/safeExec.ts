import { Response } from "express";
const safeExec = async (res: Response, func: () => Promise<void>) => {
	try {
		await func();
	} catch (error: unknown) {
		res.status(500).json({ message: (error as Error).message });
	}
};
export default safeExec;
