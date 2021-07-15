import React from "react";
import BreweryCard from "./BreweryCard";
import { Brewery } from "../App";

type Props = {
  breweries: Brewery[] | null;
  setSearchBarValue: (arg: string) => void;
};

export default function ListSection({ breweries, setSearchBarValue }: Props) {
  const handleSearchChange = (e: any) => setSearchBarValue(e.target.value);
  return (
    <>
      <h1>List of Breweries from New York</h1>
      <header className="search-bar">
        <form id="search-breweries-form" autoComplete="off">
          <label htmlFor="search-breweries">
            <h2>Search breweries:</h2>
          </label>
          <input
            id="search-breweries"
            name="search-breweries"
            type="text"
            onChange={handleSearchChange}
          />
        </form>
      </header>
      <article>
        <ul className="breweries-list">
          {breweries
            ? breweries.map((brewery) => (
                <BreweryCard
                  key={brewery.id + brewery.name}
                  brewery={brewery}
                />
              ))
            : null}
        </ul>
      </article>
    </>
  );
}
