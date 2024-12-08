import { Power, Rank } from "@/types";
import { render, screen } from "@testing-library/react";
import PowerCard from "./PowerCard";

describe("PowerCard", () => {
  it("renders the power's name", () => {
    const power = buildPower({ name: "Test Power" });
    render(<PowerCard selectedPower={power} />);
    expect(screen.getByText("Test Power")).toBeInTheDocument();
  });

  it("renders the power's rank", () => {
    const power = buildPower({ rank: Rank.Novice });
    render(<PowerCard selectedPower={power} />);
    expect(screen.getByText("Rank: Novice")).toBeInTheDocument();
  });

  it("renders the power's power points", () => {
    const power = buildPower({ powerPoints: "1" });
    render(<PowerCard selectedPower={power} />);
    expect(screen.getByText("Power Points: 1")).toBeInTheDocument();
  });

  it("renders the power's range", () => {
    const power = buildPower({ range: "Smarts" });
    render(<PowerCard selectedPower={power} />);
    expect(screen.getByText("Range: Smarts x1")).toBeInTheDocument();
  });

  it("renders the power's duration", () => {
    const power = buildPower({ duration: "Instant" });
    render(<PowerCard selectedPower={power} />);
    expect(screen.getByText("Duration: 1 Instant")).toBeInTheDocument();
  });

  it("renders the power's trappings", () => {
    const power = buildPower({ trappings: ["trap1", "trap2"] });
    render(<PowerCard selectedPower={power} />);
    expect(screen.getByText("Trappings: Trap1, Trap2")).toBeInTheDocument();
  });

  it("renders the power's full description", () => {
    const power = buildPower({ fullDescription: "Test description" });
    render(<PowerCard selectedPower={power} />);
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });
});

export function buildPower(power: Partial<Power>): Required<Power> {
  return {
    __typename: "Power",
    id: "1",
    name: "Test Power",
    rank: Rank.Novice,
    powerPoints: "1",
    range: "Smarts",
    rangeMultiplier: 1,
    duration: "Instant",
    durationMultiplier: 1,
    trappings: [],
    fullDescription: "Test description",
    alternateName: null,
    relatedPowers: [],
    summary: null,
    pageNum: null,
    powerModifiers: [],

    ...power,
  };
}
