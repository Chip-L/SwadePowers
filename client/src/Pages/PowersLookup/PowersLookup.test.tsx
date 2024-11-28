import { GET_POWER_LIST } from "@/APIs";
import {
  POWERS_LOOKUP_DEFAULT_SEARCH as POWERS_LOOKUP_DEFAULT_SEARCH_TEXT,
  POWERS_LOOKUP_TITLE,
} from "@/constants";
import { Power } from "@/types";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PowersLookup from "./PowersLookup";

const buildPower = (power: Partial<Power>): Required<Power> => ({
  __typename: "Power",
  id: "0",
  name: "Test Power",
  alternateName: null,
  relatedPowers: [],
  rank: null,
  powerPoints: null,
  range: null,
  rangeMultiplier: null,
  duration: null,
  durationMultiplier: null,
  summary: null,
  trappings: [],
  fullDescription: null,
  pageNum: null,
  powerModifiers: [],
  ...power,
});

const mockGQLGetPowerList = ({
  result = [],
  onFinish,
}: {
  result?: Power[];
  onFinish?: () => void;
}) => ({
  request: {
    query: GET_POWER_LIST,
  },
  result: () => {
    onFinish?.();
    return {
      data: {
        getPowers: result,
      },
    };
  },
});

const onGetPowerListFinished = vi.fn();
const power1 = buildPower({ id: "1", name: "Test Power 1" });
const power2 = buildPower({ id: "2", name: "Test Power 2" });
const defaultPowerList = [power1, power2];

function renderPowers(result: Power[] = []) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mocks: readonly MockedResponse<any, any>[] = [
    mockGQLGetPowerList({ result, onFinish: onGetPowerListFinished }),
  ];

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

    const loading = screen.getByRole("progressBar");
    expect(loading).toBeInTheDocument();
  });

  it("removes the loading screen", async () => {
    renderPowers();

    const loading = screen.getByRole("progressBar");
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(onGetPowerListFinished).toHaveBeenCalled();
    });

    expect(loading).not.toBeInTheDocument();
  });

  it("renders the search bar", async () => {
    renderPowers();
    expect(
      await screen.findByText(POWERS_LOOKUP_DEFAULT_SEARCH_TEXT),
    ).toBeInTheDocument();
  });

  it("renders the search bar with the correct values", async () => {
    renderPowers(defaultPowerList);

    const progressBar = screen.getByRole("progressbar");
    await waitFor(() => expect(progressBar).not.toBeInTheDocument());

    const selectOptions = screen.getAllByRole("option");
    expect(selectOptions).toHaveLength(3);
    expect(selectOptions[1].textContent).toBe(power1.name);
    expect(selectOptions[2].textContent).toBe(power2.name);
  });

  // power details are displayed
  // powerModifiers are displayed

  it("displays the correct data after choosing power", async () => {
    const user = userEvent.setup();
    const power = defaultPowerList[0];
    renderPowers(defaultPowerList);

    const progressBar = screen.getByRole("progressbar");
    await waitFor(() => expect(progressBar).not.toBeInTheDocument());

    const selectBox = screen.getByRole("combobox");
    const option = screen.getByRole("option", {
      name: power.name,
    }) as HTMLOptionElement;
    await user.selectOptions(selectBox, option);

    expect(selectBox).toHaveTextContent(power.name);
    // expect(powerDetails).toHaveTextContent(power.fullDescription);
  });
});
