module.exports = {
  clearMocks: true,
  setupFiles: ["given2/setup", "jest-plugin-context/setup"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
};
