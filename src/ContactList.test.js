import { render, screen } from "@testing-library/react";
import ContactList from "./ContactList";
import isClassComponent from "./helpers/isClassComponent";

describe("<ContactList />", () => {
  beforeEach(() => {
    render(<ContactList />);
  });

  it("renders a title", () => {
    screen.getByText("Contacts");
  });

  it("renders contacts", () => {
    screen.getByText("Andrew Clark");
    screen.getByText("Brian Vaughn");
    screen.getByText("Dan Abramov");
    screen.getByText("Flarnie Marchan");
  });

  it("has been refactored as a class component", () => {
    expect(isClassComponent(ContactList)).toBe(true);
  });
});
