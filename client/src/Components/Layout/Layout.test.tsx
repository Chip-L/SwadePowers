import * as Header from "Components/Header";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

vi.spyOn(Header, "Header").mockImplementation(() => <div>Header</div>);

describe("Layout", () => {
  it("renders the header and body", () => {
    render(<Layout />);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter a Power")).toBeInTheDocument();
  });
});
