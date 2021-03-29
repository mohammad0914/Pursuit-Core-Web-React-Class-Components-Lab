import { render, screen } from "@testing-library/react";
import App from "./App";
import isClassComponent from "./helpers/isClassComponent";

describe("<App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders a Feed", () => {
    screen.getByTestId("feed");
  });

  it("renders a Contacts List", () => {
    screen.getByTestId("contact-list");
  });

  it("has been refactored as a class component", () => {
    expect(isClassComponent(App)).toBe(true);
  });
});
