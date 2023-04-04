import 'module-alias/register';
import express from "express";
import { bootstrapDi } from "./infrastructure/di-container";
import { bootstrapRouters } from "./web/routes";
import { errorsInterceptorMiddleware } from './web/utils/errors.interceptor';
import * as dotenv from "dotenv";
import { AppTransformerExpressMiddleware } from '@web/utils/response.interceptor';
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


function initApp() {
	const diContainer = bootstrapDi();
	bootstrapRouters(app, diContainer);
	app.use(AppTransformerExpressMiddleware)
	app.use(errorsInterceptorMiddleware());
  
	app.listen(3000, () => {
	  console.log("server is running on port 3000");
	});
  }
  
  initApp();

export default app;
