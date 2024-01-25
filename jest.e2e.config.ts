import { Config } from "jest";

const config: Config = {
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.ts",
		"!src/**/*.d.ts",
		"!src/**/*.test.ts",
		"!src/**/*.spec.ts",
		"!src/**/index.ts",
		"!src/**/types.ts",
	],
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	rootDir: "./",
	testMatch: ["<rootDir>/__test__/**/*.test.ts"],
	transform: {
		"^.+\\.tsx?$": "esbuild-jest",
	},
};

export default config;
