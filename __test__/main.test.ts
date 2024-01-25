import { APIGatewayEvent } from "aws-lambda";
import { main } from "../src/main";

describe("main", () => {
	it("should return a 200 response", async () => {
		const response = await main({
			body: "test",
			requestContext: {
				requestId: "test",
			},
		} as unknown as APIGatewayEvent);

		expect(response.statusCode).toEqual(200);
		expect(typeof response.body).toEqual("string");
		expect(JSON.parse(response.body)).toEqual({
			body: "test",
			requestId: "test",
		});
	});
});
