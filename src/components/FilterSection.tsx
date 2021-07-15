import React from "react";
import { FilterType } from "../App";
import FilterCityCheckBox from "../components/FilterCityCheckBox";

type Props = {
  setFilterType: (arg: FilterType) => void;
  setFilterCity: (arg: string[]) => void;
  cityList: string[];
  filterCity: string[];
};

export default function FilterSection({
  setFilterType,
  setFilterCity,
  cityList,
  filterCity,
}: Props) {
  const handleTypeChange = (type: FilterType) => {
    if (type === "") setFilterType("");
    else setFilterType(type);
  };

  return (
    <aside className="filters-section">
      <h2>Filter By:</h2>
      <form id="filter-by-type-form" autoComplete="off">
        <label htmlFor="filter-by-type">
          <h3>Type of Brewery</h3>
        </label>
        <select
          name="filter-by-type"
          id="filter-by-type"
          onChange={(e: any) => handleTypeChange(e.target.value)}
        >
          <option value="">Select a type...</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
        </select>
      </form>
      <div className="filter-by-city-heading">
        <h3>Cities</h3>
        <button className="clear-all-btn">clear all</button>
      </div>
      <form id="filter-by-city-form">
        {cityList.map((city) => (
          <FilterCityCheckBox
            key={city}
            city={city}
            setFilterCity={setFilterCity}
            filterCity={filterCity}
          />
        ))}
      </form>
    </aside>
  );
}
