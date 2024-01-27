import { Config } from "jest";

const config: Config = {
	cache: true,
	testMatch: ["<rootDir>/__test__/**/*.test.ts"],
	cacheDirectory: "<rootDir>/.cache/jest",
	preset: "ts-jest",
	displayName: {
		name: "E2E",
		color: "green",
	},
	detectOpenHandles: true,
	globalSetup: "<rootDir>/__test__/serverless.setup.ts",
	globalTeardown: "<rootDir>/__test__/serverless.teardown.ts",
	transform: {
		"^.+\\.tsx?$": "esbuild-jest",
	},
};

export default config;
