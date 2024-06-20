import React, { useState } from "react";
import data from "../data.json";
import TableRow from "./TableRow";
import InfiniteScroll from "react-infinite-scroll-component";

const MainTable = () => {
  const [dataSet, setDataSet] = useState(data);
  const [searchResult, setSearchResult] = useState(dataSet);
  const [searched, setSearched] = useState(false);
  const [sortValues, setSortValues] = useState({
    rating: false,
    h_fees: false,
    l_fees: false,
  });

  const fetchData = () => {
    setDataSet((prev) => prev.concat(data));
    setSearchResult(dataSet);
  };

  const handleSearchBar = (e) => {
    if (!e.target.value) {
      setSearched(false);
      return;
    }

    setSearched(true);
    setSortValues({
      rating: false,
      h_fees: false,
      l_fees: false,
    });
    setSearchResult(
      dataSet.filter((data) => data.name.toLowerCase().includes(e.target.value))
    );
  };

  const handleSorting = (e) => {
    const name = e.target.name;
    setSortValues((prev) => {
      return { ...prev, [name]: !prev[name] };
    });

    if (name === "rating" && e.target.checked) {
      searched
        ? searchResult.sort((a, b) => b.reviews.rating - a.reviews.rating)
        : dataSet.sort((a, b) => b.reviews.rating - a.reviews.rating);
    } else if (name === "h_fees" && e.target.checked) {
      searched
        ? searchResult.sort((a, b) => b.course.fees - a.course.fees)
        : dataSet.sort((a, b) => b.course.fees - a.course.fees);
    } else if (name === "l_fees" && e.target.checked) {
      searched
        ? searchResult.sort((a, b) => a.course.fees - b.course.fees)
        : dataSet.sort((a, b) => a.course.fees - b.course.fees);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-2">
        <input
          type="text"
          placeholder="Search by College name"
          className="px-4 py-2 w-1/3 border border-gray-200 outline-none"
          onChange={handleSearchBar}
        />
        <div className="flex items-center space-x-3">
          <span className="font-medium">Sort By</span>
          <div>
            <input
              type="radio"
              name="rating"
              id="rating"
              checked={sortValues.rating}
              onChange={handleSorting}
            />
            <label htmlFor="rating">Rating</label>
          </div>
          <div>
            <input
              type="radio"
              name="h_fees"
              id="h_fees"
              checked={sortValues.h_fees}
              onChange={handleSorting}
            />
            <label htmlFor="h_fees">Highest Fees</label>
          </div>
          <div>
            <input
              type="radio"
              name="l_fees"
              id="l_fees"
              checked={sortValues.l_fees}
              onChange={handleSorting}
            />
            <label htmlFor="l_fees">Lowest Fees</label>
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={searched ? searchResult.length : dataSet.length}
        next={fetchData}
        hasMore={!searched}
      >
        <table className="w-full border-collapse border font-normal border-slate-200">
          <thead>
            <tr className="bg-[#88BDC4] text-white">
              <td className="table-row-styling">CD Rank</td>
              <td className="table-row-styling">Colleges</td>
              <td className="table-row-styling">Course Fees</td>
              <td className="table-row-styling">Placement</td>
              <td className="table-row-styling">User Reviews</td>
              <td className="table-row-styling">Ranking</td>
            </tr>
          </thead>
          <tbody>
            {searched
              ? searchResult.map((item, idx) => (
                  <TableRow key={idx + 1} item={item} />
                ))
              : dataSet.map((item, idx) => (
                  <TableRow key={idx + 1} item={item} />
                ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};

export default MainTable;
