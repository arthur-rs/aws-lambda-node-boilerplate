import { agent } from "./agent";

describe("Test EndToEnd", () => {
	test("[POST] /", async () => {
		const response = await agent.post("/", {
			name: "John",
		});

		expect(response.status).toBe(200);
		expect(JSON.parse(response.data.body)).toEqual({
			name: "John",
		});
	});

	it("[GET] /", async () => {
		const response = await agent.get("/");

		expect(response.status).toBe(200);
		expect(JSON.parse(response.data.body)).toBeNull();
	});
});
