import { render, screen } from "@testing-library/react";
import Feed from "./Feed";
import isClassComponent from "./helpers/isClassComponent";

describe("<Feed />", () => {
  beforeEach(() => {
    render(<Feed />);
  });

  it("renders four Posts", () => {
    const posts = screen.getAllByTestId("post");
    expect(posts.length).toBe(4);
  });

  it("renders two Ads", () => {
    const ads = screen.getAllByTestId("ad");
    expect(ads.length).toBe(2);
  });

  it("has been refactored as a class component", () => {
    expect(isClassComponent(Feed)).toBe(true);
  });
});
