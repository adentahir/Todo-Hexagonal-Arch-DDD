import { LotusService } from "../src/application/services/external/feature-flagging/lotus.service";
import { Lotus } from "lotus-typescript";
import nock from "nock";

process.env.TOKEN =
	"8ac571ff4e8a18343283f9b3306f2ff7dbef4533907bc32c5dd3468ce6721325";

describe("LotusService", () => {
	let service: LotusService;

	beforeAll(() => {
		service = new LotusService(
			new Lotus("jv4m2kDA.4kaakiMrGI3gx3r6RrzE3he0fn70B1pC", {
				host: "https://localhost",
			}),
		);
	});

	it("should get customers", async () => {
		nock("https://localhost").get("/app/customers/")

		.reply(200);

		await service.listCustomers();
	});

	// it("should make a new customer", async () => {
	// 	const customerId = "test-cust-id";
	// 	const email = "test@email.com";
	// 	const customerName = "Test Customer";

	// 	nock("https://localhost")
	// 		.post("/app/customers/", {
	// 			customer_id: customerId,
	// 			email: email,
	// 			customer_name: customerName,
	// 		})
	// 		.matchHeader("Content-Type", "application/json")
	// 		.matchHeader(
	// 			"Authorization",
	// 			"Bearer 8ac571ff4e8a18343283f9b3306f2ff7dbef4533907bc32c5dd3468ce6721325",
	// 		)
	// 		.reply(201);
	// 	await service.userSignup(customerId, email, customerName);
	// });

	// it("should check metric access correctly", async () => {
	// 	const customerId = "test-cust-id";
	// 	const metricId = "test-metric-id";

	// 	const metricAccessResponse = {};

	// 	nock("https://localhost")
	// 		.get("/app/metrics/")
	// 		.query({ customer_id: customerId, metric_id: metricId })
	// 		.reply(200, { data: [metricAccessResponse] });

	// 	const result = await service.checkMetricsAccess(customerId, metricId);

	// 	expect(result).toEqual(metricAccessResponse);
	// });

	// it("should check feature access correctly", async () => {
	// 	const customerId = "test-cust-id";
	// 	const featureId = "test-feature-id";

	// 	const featureAccessResponse = {};

	// 	nock("https://localhost")
	// 		.get("/app/features/")
	// 		.query({ customer_id: customerId, feature_id: featureId })
	// 		.reply(200, { data: [featureAccessResponse] });

	// 	const result = await service.checkFeatureAccess(customerId, featureId);

	// 	expect(result).toEqual(featureAccessResponse);
	// });

	// it("should change subscription plan correctly", async () => {
	// 	const planId = "test-plan-id";
	// 	const newPlanId = "test-new-plan-id";

	// 	const changeSubscriptionPlanResponse = {};

	// 	nock("https://localhost")
	// 		.post(`/app/subscriptions/${planId}/switch`, {
	// 			switch_plan_id: newPlanId,
	// 			invoicing_behavior: "invoice_now",
	// 		})
	// 		.reply(200, { data: changeSubscriptionPlanResponse });

	// 	const result = await service.changeSubscriptionPlan(planId, newPlanId);

	// 	expect(result).toEqual(changeSubscriptionPlanResponse);
	// });
});
