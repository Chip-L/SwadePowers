import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";

if (import.meta.env.DEV) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
