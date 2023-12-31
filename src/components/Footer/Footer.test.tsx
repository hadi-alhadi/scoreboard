import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import packageJson from "../../../package.json";

describe("footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("should render", () => {
    expect(screen.getByTestId("footer")).toMatchSnapshot();
  });

  it("should render the ProfileLink component", async () => {
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/hadi-al-hadi",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/hadi-alhadi",
    );
  });

  it("should render the copyright", () => {
    const currentYear = new Date().getFullYear();
    expect(screen.getByTestId("copyright")).toHaveTextContent(
      `© ${packageJson.author} ${currentYear}. All rights reserved.`,
    );
  });
});
