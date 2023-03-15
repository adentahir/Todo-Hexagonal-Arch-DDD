import express, { Request, Response } from "express";
import { bootstrapDi } from "./infrastructure/di-container";
import { bootstrapRouters } from "./web/routes";
import { authMiddleware } from "./application/user/authMiddleware";
import cors from "cors";
import * as dotenv from "dotenv";
const app = express();

dotenv.config();

const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

app.use(cors({}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);

const diContainer = bootstrapDi();
bootstrapRouters(app, diContainer);

app.listen(3000, () => {
	console.log("server is running on port 3000");
	console.log(slackWebhookUrl);
});

export default app;
