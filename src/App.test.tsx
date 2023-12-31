import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import App from "./App";
import React from "react";

describe("App", () => {
  it("renders correctly the headline", () => {
    render(<App />);

    const image = screen.getAllByAltText("FIFA World Cup Logo");
    expect(image[0].src).toContain("/logo.png");
  });
});
