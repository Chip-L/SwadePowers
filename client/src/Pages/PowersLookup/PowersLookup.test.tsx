import { GET_POWER_LIST } from "@/APIs";
import { POWERS_LOOKUP_TITLE } from "@/constants";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import PowersLookup from "./PowersLookup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mocks: readonly MockedResponse<any, any>[] = [
  {
    request: {
      query: GET_POWER_LIST,
      // variables: {
      //   name: "Buck",
      // },
    },
    result: {
      data: {
        getPowers: [],
      },
    },
  },
];

function renderPowers() {
  render(
    <MockedProvider
      mocks={mocks}
      addTypename={false}
    >
      <PowersLookup />
    </MockedProvider>,
  );
}

describe("Powers", () => {
  it("renders page title", () => {
    renderPowers();

    const title = screen.getByText(POWERS_LOOKUP_TITLE);
    expect(title.tagName).toMatch(/h1/i);
  });

  it("renders a loading screen", () => {
    renderPowers();

    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();
  });

  it.skip("renders the search bar", () => {
    render(<PowersLookup />);
    expect(screen.getByText("SearchBar")).toBeInTheDocument();
  });
});

// loading indicator is displayed
// select a power
// power details are displayed
// powerModifiers are displayed
// power details and powerModifiers are updated when power is changed
