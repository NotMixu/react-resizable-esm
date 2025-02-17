import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  testEnvironment: "jsdom",
  coverageThreshold: {
    global: {
      branches: 70, // TODO: > 80
      functions: 70, // TODO: > 80
      lines: 80,
      statements: 75, // TODO: > 80
    },
  },
  setupFiles: [path.join(__dirname, "/setupTests/enzyme")],
  coveragePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/dist/",
    "<rootDir>/flow-typed/",
  ],
  collectCoverageFrom: ["lib/*.{js,jsx}"],
};
