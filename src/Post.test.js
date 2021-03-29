import { render, screen } from "@testing-library/react";
import Post from "./Post";
import isClassComponent from "./helpers/isClassComponent";

describe("<Post />", () => {
  beforeEach(() => {
    render(<Post />);
  });

  it("renders a title", () => {
    screen.getByText("Sample Post Title");
  });

  it("renders an image", () => {
    screen.getByAltText("post");
  });

  it("renders a description", () => {
    screen.getByText("This is the description of the post");
  });

  it("has been refactored as a class component", () => {
    expect(isClassComponent(Post)).toBe(true);
  });
});
