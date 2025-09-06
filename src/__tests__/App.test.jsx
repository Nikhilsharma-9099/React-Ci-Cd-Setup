import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders Vite + React text", () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});

test("increments count on button click", () => {
  render(<App />);
  const button = screen.getByText(/count is 0/i);
  fireEvent.click(button);
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
});
