import React, { useState } from "react";
import searchIcon from "../assets/search.png";
import cities from "cities.json";
import { useGlobalContext } from "../context";
import Sticky from "react-sticky-el";

const Search = () => {
  const { loadCity, isCelsius, setIsCelsius, weatherData } = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);

    setFilteredCities(
      cities.filter((citiy) => {
        const regex = new RegExp(`^${e.target.value}`, "gi");
        return citiy.name.match(regex);
      })
    );
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchValue !== "" && filteredCities.length > 0) {
      loadCity(filteredCities[0].name);
      setSearchValue("");
    }
  };

  return (
    <Sticky>
      <section className="search">
        <div className="search__container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchInput}
            onKeyDown={handleKeyDown}
          />
          <img
            src={searchIcon}
            alt="search"
            className="search__container__icon"
            onClick={handleSearch}
          />
        </div>
        {filteredCities.length > 0 && searchValue !== "" && (
          <div className="search__suggestions">
            {filteredCities.slice(0, 5).map(({ name }, index) => {
              return (
                <li key={index} className="search__suggestions__item">
                  {name}
                </li>
              );
            })}
          </div>
        )}

        {weatherData !== undefined && (
          <button
            className="search__switch-units"
            onClick={() => {
              setIsCelsius(!isCelsius);
            }}
          >
            {isCelsius ? "°F" : "°C"}
          </button>
        )}
      </section>
    </Sticky>
  );
};

export default Search;
