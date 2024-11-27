import { ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./SearchBar";

const onSelectSpy = vi.fn();
const defaultDefaultValue = "default value";
const defaultOptions = [
  { id: "1", name: "Power 1" },
  { id: "2", name: "Power 2" },
];

type SearchBarProps = ComponentProps<typeof SearchBar>;
function renderSearchBar({
  defaultValue = defaultDefaultValue,
  value = "",
  optionList = defaultOptions,
  onSelect = onSelectSpy,
}: Partial<SearchBarProps> = {}) {
  render(
    <SearchBar
      defaultValue={defaultValue}
      value={value}
      optionList={optionList}
      onSelect={onSelect}
    />,
  );
}

describe("SearchBar", () => {
  it("correctly sets default option", () => {
    renderSearchBar({ optionList: [] });

    const defaultOption = screen.getByRole("option", {
      name: defaultDefaultValue,
    }) as HTMLOptionElement;

    expect(defaultOption.selected).toBe(true);
  });

  it("displays the correct number of options", () => {
    renderSearchBar();

    expect(screen.getAllByRole("option").length).toBe(
      defaultOptions.length + 1,
    );
  });

  it("calls onSelect when a new option is selected", async () => {
    const user = userEvent.setup();
    renderSearchBar();

    const selectBox = screen.getByRole("combobox");
    const option = screen.getByRole("option", {
      name: "Power 1",
    }) as HTMLOptionElement;

    await user.selectOptions(selectBox, option);
    expect(onSelectSpy).toHaveBeenCalledWith("1");
  });

  it("displays the correct value", () => {
    renderSearchBar({ value: "2" });

    const selectedOption = screen.getByRole("option", {
      name: "Power 2",
    }) as HTMLOptionElement;

    expect(selectedOption.selected).toBe(true);
  });
});
