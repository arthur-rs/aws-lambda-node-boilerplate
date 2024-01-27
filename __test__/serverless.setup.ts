import { setup } from "jest-dev-server";

export default async function globalSetup() {
	globalThis.servers = await setup({
		command: "sls offline start --httpPort 4000",
		launchTimeout: 50000,
		port: 4000,
	});
}
