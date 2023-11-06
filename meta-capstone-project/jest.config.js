module.exports = {
    // Test file patterns
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  
    // Directories to search for tests
    roots: ["<rootDir>/src"],
  
    // Transform options
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
  
    // Test environment
    testEnvironment: "jsdom",
  
    // Test coverage
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/index.js"],
  };