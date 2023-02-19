import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { CounterProvider } from "./context/counter";

test("renders learn react link", () => {
  const { getByText } = render(
    <CounterProvider initialCount={2}>
      <App />
    </CounterProvider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
