import { capitalize } from "lodash";
import { Power } from "@/types";

interface PowerCardProps {
  selectedPower: Power;
}

function PowerCard({ selectedPower }: PowerCardProps) {
  return (
    <>
      <div>
        <h2>{selectedPower.name}</h2>
        <div className="flex-container">
          <p>Rank: {capitalize(selectedPower.rank ?? "Error")}</p>

          <p>Power Points: {selectedPower.powerPoints}</p>
          <p>
            Range: {selectedPower.range}{" "}
            {selectedPower.rangeMultiplier
              ? "x" + selectedPower.rangeMultiplier
              : selectedPower.rangeMultiplier}
          </p>
          <p>
            Duration: {selectedPower.durationMultiplier}{" "}
            {selectedPower.duration}
          </p>
        </div>
        <p>
          Trappings:{" "}
          {(
            selectedPower?.trappings?.map((trapping) =>
              capitalize(trapping ?? ""),
            ) ?? []
          ).join(", ")}
        </p>
        <p>{selectedPower.fullDescription}</p>
      </div>
    </>
  );
}

export default PowerCard;
