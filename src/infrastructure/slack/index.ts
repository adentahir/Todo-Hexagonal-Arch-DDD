import axios from "axios";

export const sendSlackMessage = async (
	webhookUrl: string,
	message: string,
): Promise<void> => {
	try {
		const response = await axios.post(
			webhookUrl,
			{
				text: message,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		console.log("Message sent to Slack:", response.data);
	} catch (error) {
		console.error("Error sending message to Slack:", error);
	}
};
