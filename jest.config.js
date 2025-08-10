/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "html"
  ],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)",
    "**/*.(test|spec).(js|jsx|ts|tsx)"
  ],

  // Verbose output for more detailed test information
  verbose: true,

  // Detect open handles (useful for debugging async operations)
  detectOpenHandles: true,

  // Force exit after tests complete
  forceExit: true,

  // Run all tests serially in the current process, which is useful for debugging
  runInBand: true, 

  // Setup file to configure environment variables before tests run
  setupFiles: ['./tests/setTestEnv.js']
};

module.exports = config;
