import React from "react";

type Props = {
  city: string;
  setFilterCity: (arg: string[]) => void;
  filterCity: string[];
};

export default function FilterCityCheckBox({
  city,
  setFilterCity,
  filterCity,
}: Props) {
  const handleChange = (e: any) => {
    if (e.target.checked) setFilterCity([...filterCity, e.target.name]);
    else setFilterCity(filterCity.filter((target) => target !== e.target.name));
  };

  console.log(filterCity);
  return (
    <>
      <input type="checkbox" name={city} value={city} onChange={handleChange} />
      <label htmlFor={city}>{city}</label>
    </>
  );
}
