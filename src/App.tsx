import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";

export type Brewery = {
  id: number;
  obdb_id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state: string;
  county_province: string | null;
  postal_code: string;
  country: string;
  longitude: null;
  latitude: null;
  phone: string;
  website_url: string;
  updated_at: string;
  created_at: string;
};

export type FilterType = "micro" | "regional" | "brewpub" | "";

export default function App() {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [breweries, setBreweries] = useState<Brewery[] | null>(null);
  const [filteredBreweries, setFilteredBreweries] = useState(breweries);
  const [filterType, setFilterType] = useState<FilterType>("");
  const [filterCity, setFilterCity] = useState<string[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [searchBarValue, setSearchBarValue] = useState<string>("");

  // event type update later
  const handleSearchBarSubmit = (e: any) => {
    e.preventDefault();
    setSearchValue(e.target["select-state"].value);
  };

  useEffect(() => {
    if (searchValue)
      fetch(`https://api.openbrewerydb.org/breweries?by_state=${searchValue}`)
        .then((resp) => resp.json())
        .then((data) => {
          let filteredData: Brewery[] = data.filter(
            (target: Brewery) =>
              target.brewery_type === "micro" ||
              target.brewery_type === "regional" ||
              target.brewery_type === "brewpub"
          );
          setBreweries(filteredData);
          let newCityList: string[] = [];
          filteredData.map((target: Brewery) => {
            if (!newCityList.some((city) => city === target.city))
              newCityList.push(target.city);
          });
          setCityList(newCityList);
        });
  }, [searchValue]);

  useEffect(() => {
    if (!breweries) return;
    let filteredList: Brewery[] = [...breweries];
    if (filterType)
      filteredList = filteredList.filter((target: Brewery) => {
        if (target.brewery_type === filterType) return target;
      });

    if (filterCity.length) {
      filteredList = filteredList.filter((target: Brewery) => {
        if (filterCity.some((e) => e === target.city)) return target;
      });
    }
    if (searchBarValue)
      filteredList = filteredList.filter((target: Brewery) => {
        if (target.name.toLowerCase().includes(searchBarValue.toLowerCase()))
          return target;
      });

    console.log(filteredList);
    setFilteredBreweries([...filteredList]);
  }, [breweries, filterType, filterCity, searchBarValue]);

  return (
    <>
      <Header handleSearchBarSubmit={handleSearchBarSubmit} />
      <main>
        {searchValue ? (
          <>
            <FilterSection
              setFilterType={setFilterType}
              setFilterCity={setFilterCity}
              cityList={cityList}
              filterCity={filterCity}
            />
            <ListSection
              breweries={filteredBreweries}
              setSearchBarValue={setSearchBarValue}
            />
          </>
        ) : null}
      </main>
    </>
  );
}
