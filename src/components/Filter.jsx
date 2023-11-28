import React from "react";
import { Input, Select } from "antd";

const { Search } = Input;

const Filter = ({ memorizedMovies, setMyMovies }) => {
  // filter by rate
  const filterByRate = (rate) => {
    let filteredMovies = memorizedMovies.myMemorizedmovies.filter(
      (item) => Number(item.rating) === Number(rate)
    );
    setMyMovies(filteredMovies);
  };
  // this is filter search
  const filterBySearch = (value) => {
    let filteredmovies = memorizedMovies.myMemorizedmovies.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLowerCase().trim())
    );
    setMyMovies(filteredmovies);
  };

  return (
    <div className="flex gap-4 flex-row max-sm:flex-col place-items-center">
      <Search
        placeholder=" search movie"
        // onSearch={onSearch}
        enterButton
        style={{ width: 250 }}
        //adding a filter search
        onSearch={(value) => filterBySearch(value)}
      />

      <Select
        defaultValue="filter by rate"
        style={{
          width: 150,
        }}
        //onChange={handleChange}
        onChange={(value) => filterByRate(value)}
        options={[
          {
            value: "1",
            label: "⭐",
          },
          { value: "2", label: "⭐⭐" },
          { value: "3", label: "⭐⭐⭐" },
          { value: "4", label: "⭐⭐⭐⭐" },
          { value: "5", label: "⭐⭐⭐⭐⭐" },
        ]}
      />
    </div>
  );
};

export default Filter;
