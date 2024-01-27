const { teardown: teardownDevServer } = require("jest-dev-server");

export default async function globalTeardown() {
	await teardownDevServer(globalThis.servers);
}
