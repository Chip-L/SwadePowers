import { useState } from "react";
import { GET_POWER_LIST } from "@/APIs";
import LoadingSpinner from "@/Components/LoadingSpinner";
import { SearchBar } from "@/Components/SearchBar";
import { POWERS_LOOKUP_DEFAULT_SEARCH, POWERS_LOOKUP_TITLE } from "@/constants";
import { useQuery } from "@apollo/client";

const PowersLookup = () => {
  const [selectedPower, setSelectedPower] = useState<string>("");
  const { data, loading } = useQuery(GET_POWER_LIST);

  return (
    <>
      <h1>{POWERS_LOOKUP_TITLE}</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <SearchBar
          defaultValue={POWERS_LOOKUP_DEFAULT_SEARCH}
          value={selectedPower}
          optionList={data?.getPowers ?? []}
          onSelect={setSelectedPower}
        />
      )}
    </>
  );
};

export default PowersLookup;
