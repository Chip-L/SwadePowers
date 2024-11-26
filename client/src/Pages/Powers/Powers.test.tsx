import { render, screen } from "@testing-library/react";
import Powers from "./Powers";

describe("Powers", () => {
  it("renders page title", () => {
    render(<Powers />);

    const title = screen.getByText("Powers");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toMatch(/h1/i);
  });

  it("renders the search bar", () => {
    render(<Powers />);
    expect(screen.getByPlaceholderText("Enter a Power")).toBeInTheDocument();
  });
});
