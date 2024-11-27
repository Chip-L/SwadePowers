import "./SearchBar.css";

type Option = {
  id: string;
  name: string;
};

interface SearchBarProps {
  defaultValue: string;
  value: string;
  optionList: Option[];
  onSelect: (id: string) => void;
}

export const SearchBar = ({
  defaultValue,
  value = "",
  optionList,
  onSelect,
}: SearchBarProps) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <div className="SearchBar">
      <select
        onChange={handleSelect}
        value={value}
      >
        <option value="">{defaultValue}</option>
        {optionList.map((option) => (
          <option
            key={option.id}
            value={option.id}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
