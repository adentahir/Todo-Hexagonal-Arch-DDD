import express, { Request, Response } from "express";
import { bootstrapDi } from "./infrastructure/di-container";
import { bootstrapRouters } from "./web/routes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// first round of validqations

const diContainer = bootstrapDi();
bootstrapRouters(app, diContainer);

app.listen(3000, () => {
	console.log("server is running on port 3000");
});
