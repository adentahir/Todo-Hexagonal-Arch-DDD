import mailjet from "node-mailjet";

const mj = mailjet.apiConnect(
	"8b3597f8448a6f97b12f54be0c8c570f",
	"a55a2353ff8a4849cf1c7db88f30c6de",
); 

const request = async () => {
	try {
		const response = await mj.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: "aden.tahir7@gmail.com",
						Name: "Aden",
					},
					To: [
						{
							Email: "aden.tahir7@gmail.com",
							Name: "Aden",
						},
					],
					Subject: "Greetings from Mailjet.",
					TextPart: "My first Mailjet email",
					HTMLPart:
						"<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
					CustomID: "AppGettingStartedTest",
				},
			],
		});

		console.log(response.body);
	} catch (error: unknown) {
		console.log({ message: (error as Error).message });
	}
};

export default request;
