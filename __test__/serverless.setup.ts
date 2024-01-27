import { setup } from "jest-dev-server";

export default async function globalSetup() {
	globalThis.servers = await setup({
		command: "sls offline start --httpPort 3000",
		launchTimeout: 50000,
		port: 3000,
	});
}
