module.exports = {
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
	},
};
