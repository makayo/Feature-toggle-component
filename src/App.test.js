import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the active toggle version label", () => {
  render(<App />);
  expect(screen.getByText(/Using the/i)).toBeInTheDocument();
});

test("renders the toggled content", () => {
  render(<App />);
  expect(screen.getByText(/Toggle Components/i)).toBeInTheDocument();
});
