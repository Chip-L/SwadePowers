import { useState } from "react";
import { GET_POWER_LIST } from "@/APIs";
import LoadingSpinner from "@/Components/LoadingSpinner";
import { SearchBar } from "@/Components/SearchBar";
import { POWERS_LOOKUP_DEFAULT_SEARCH, POWERS_LOOKUP_TITLE } from "@/constants";
import PowerCard from "@/containers/PowerCard";
import { Power } from "@/types";
import { useQuery } from "@apollo/client";

const PowersLookup = () => {
  const [selectedPowerId, setSelectedPowerId] = useState<string>("");
  const { data, loading } = useQuery(GET_POWER_LIST);
  const selectedPower: Power | undefined = data?.getPowers.find(
    (power) => power.id === selectedPowerId,
  );

  return (
    <>
      <h1>{POWERS_LOOKUP_TITLE}</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchBar
            defaultValue={POWERS_LOOKUP_DEFAULT_SEARCH}
            value={selectedPowerId}
            optionList={data?.getPowers ?? []}
            onSelect={setSelectedPowerId}
          />
          {selectedPower && (
            <>
              <PowerCard selectedPower={selectedPower} />
              <ul>
                {selectedPower.powerModifiers &&
                  selectedPower.powerModifiers.map(
                    (powerModifier) =>
                      powerModifier && (
                        <li key={powerModifier.id}>{powerModifier.name}</li>
                      ),
                  )}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
};

export default PowersLookup;
