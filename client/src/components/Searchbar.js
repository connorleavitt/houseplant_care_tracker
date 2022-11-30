import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export default function Searchbar({ findSearchInput }) {
  const query = useRef();
  const [searchFocus, setSearchFocus] = useState();

  const handleSearchClick = () => {
    console.log(query.current.value);
    findSearchInput(query.current.value.toLowerCase());
    handleSearchFocus();
  };

  const handleDeleteClick = () => {
    query.current.value = "";
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(query.current.value);
    findSearchInput(query.current.value.toLowerCase());
  };

  const handleSearchFocus = () => {
    if (searchFocus === "active") {
      return setSearchFocus("not-active");
    }
    return setSearchFocus("active");
  };

  function focus() {
    query.current.focus();
  }

  return (
    <div
      onClick={focus}
      className="searchbar-wrapper"
      data-active-focus={searchFocus}
    >
      <button className="searchbar-btn" onClick={handleSearchClick}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
      <form
        onSubmit={handleSearchSubmit}
        onFocus={handleSearchFocus}
        onBlur={handleSearchFocus}
        className="form-searchbar"
      >
        <label className="form-searchbar-label">
          <input
            ref={query}
            type="search"
            id="search"
            placeholder="Search..."
          />
        </label>
      </form>
      <button className="searchbar-delete-btn" onClick={handleDeleteClick}>
        <FontAwesomeIcon icon="fa-solid fa-x" />{" "}
      </button>
    </div>
  );
}
