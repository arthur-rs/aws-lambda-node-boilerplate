import type { APIGatewayEvent } from "aws-lambda";

async function main({ body, requestContext }: APIGatewayEvent) {
	return {
		statusCode: 200,
		body: JSON.stringify({
			body: body,
			requestId: requestContext.requestId,
		}),
	};
}

export { main };
