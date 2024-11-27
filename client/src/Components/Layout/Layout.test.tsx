import * as Header from "Components/Header";
import * as Powers from "Pages/Powers";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

vi.spyOn(Header, "Header").mockImplementation(() => <div>Header</div>);
vi.spyOn(Powers, "default").mockImplementation(() => <div>Powers</div>);

describe("Layout", () => {
  it("renders the header and body", () => {
    render(<Layout />);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Powers")).toBeInTheDocument();
  });
});
