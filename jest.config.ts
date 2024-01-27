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
	cache: true,
	cacheDirectory: "<rootDir>/.cache/jest",
	displayName: {
		name: "Unit",
		color: "blue",
	},
	preset: "ts-jest",
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	testMatch: ["<rootDir>/src/**/*.test.ts"],
	transform: {
		"^.+\\.tsx?$": "esbuild-jest",
	},
};

export default config;
