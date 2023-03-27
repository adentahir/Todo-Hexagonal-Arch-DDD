import 'module-alias/register';
import express from "express";
import { bootstrapDi } from "./infrastructure/di-container";
import { bootstrapRouters } from "./web/routes";
import { errorHandlingMiddleware } from '@web/middlewares/errors.middleware';
import * as dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


function initApp() {
	const diContainer = bootstrapDi();
	bootstrapRouters(app, diContainer);
	app.use(errorHandlingMiddleware);
  
	app.listen(3000, () => {
	  console.log("server is running on port 3000");
	});
  }
  
  initApp();

export default app;
