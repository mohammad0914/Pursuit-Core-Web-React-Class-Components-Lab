import { render, screen } from "@testing-library/react";
import Ad, { adInfo } from "./Ad";
import isClassComponent from "./helpers/isClassComponent";

describe("<Ad />", () => {
  beforeEach(() => {
    render(<Ad />);
  });

  it("renders an image", () => {
    screen.getByAltText("cool ad");
  });

  it("renders a description", () => {
    const adTextEl = screen.getByTestId("ad-text");
    const adTexts = adInfo.map((ad) => ad.text);

    expect(adTexts).toContain(adTextEl.textContent);
  });

  it("has been refactored as a class component", () => {
    expect(isClassComponent(Ad)).toBe(true);
  });
});
