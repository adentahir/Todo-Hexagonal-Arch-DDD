import { Lotus } from "lotus-typescript";

const client = new Lotus("jv4m2kDA.4kaakiMrGI3gx3r6RrzE3he0fn70B1pC", {
	host: "http://localhost",
});

export interface MetricAccess {
	plan_id: string;
	subscription_filters: { value: string; property_name: string }[];
	usage_per_component: {
		event_name: string;
		metric_name: string;
		metric_id: string;
		metric_usage: number;
		metric_free_limit: number | null;
		metric_total_limit: number | null;
	}[];
}

export interface FeatureAccess {
	feature_name: string;
	plan_id: string;
	subscription_filters: { value: string; property_name: string }[];
	access: boolean;
}

export interface Subscription {
	subscription_id: string;
	customer_id: string;
}

export interface SwitchSubscriptionPlan {
	start_date?: string;
}

export interface Currency {
	code: string;
	name: string;
	symbol: string;
}

export interface Customer {
	email: string;
	customer_id: string;
	customer_name: string;
	default_currency: Currency;
}

type Customers = Customer[];
type CustomerSubscriptions = Subscription[];

export class LotusService {
	private client: Lotus;
	constructor(client: Lotus) {
		this.client = client;
		this.client.flush();
	}
	async userSignup(
		cust_id: string,
		email: string,
		customer_name: string,
	): Promise<void> {
		await client.createCustomer({
			customer_id: cust_id,
			email: email,
			customer_name: customer_name,
		});

		await client.createSubscription({
			customer_id: cust_id,
			plan_id: "free_plan",
			start_date: "2022-02-23",
		});
	}

	async checkMetricsAccess(
		cust_id: string,
		metrics_id: string,
	): Promise<boolean> {
		const result = await client.checkMetricAccess({
			customer_id: cust_id,
			metric_id: metrics_id,
		});

		const usage_data = result.data[0]?.usage_per_component[0];

		const total = usage_data?.metric_total_limit;
		const usage = usage_data?.metric_usage;

		return total === null || usage <= total;
	}

	async checkFeatureAccess(
		cust_id: string,
		feature_id: string,
	): Promise<boolean> {
		const result = await client.checkFeatureAccess({
			customer_id: cust_id,
			feature_id: feature_id,
		});
		return result.data[0].access;
	}

	async changeSubscriptionPlan(
		plan_id: string,
		new_plan_id: string,
	): Promise<SwitchSubscriptionPlan> {
		const result = await client.switchSubscriptionPlan({
			subscription_id: plan_id,
			switch_plan_id: new_plan_id,
		});
		return result.data;
	}

	async listCustomers(): Promise<Customers> {
		const result = await client.listCustomers();
		return result.data;
	}

	// async checkCustomerSubscriptions(cust_id: string): Promise<CustomerSubscriptions>{
	//     const result = await client.listSubscriptions({ customer_id: cust_id });
	//     return result.data;
	// }

	async trackEvent(
		cust_id: string,
		event_name: string,
		metric_id: string,
		metric_usage: number,
	): Promise<void> {
		await client.trackEvent({
			event_name: "streaming_event",
			properties: {
				metric_id: metric_id,
				metric_usage: metric_usage,
			},
			time_created: Date.now().toString(),
			idempotency_id: "idempotency_id",
			customer_id: cust_id,
		});
	}

	async trackEmails(
		cust_id: string,
		event_name: string,
		total: number,
	): Promise<void> {
		await client.trackEvent({
			event_name: "email_sent",
			properties: {
				total_emails: total,
			},
			time_created: Date.now().toString(),
			idempotency_id: "idempotency_id",
			customer_id: cust_id,
		});
	}

	async sendEmailMetricAccess(
		cust_id: string,
		metrics_id: string,
	): Promise<void> {
		const result = await client.checkMetricAccess({
			customer_id: cust_id,
			metric_id: metrics_id,
		});
		const total = result.data[0].usage_per_component[0].metric_total_limit;
		const usage = result.data[0].usage_per_component[0].metric_usage;
	}
	// client.changePrepaidUnits({
	//     subscription_id: result.data[0].subscription_id,
	//     metric_id: metrics_id,
	//     prepaid_units: total - usage,

	// }
}
