import React from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import PropTypes from "prop-types";
import InputBox from "../InputBox/InputBox";

const SearchVideos = ({ onSearchSubmit }) => {
  return (
    <SearchContainer onSearchSubmit={onSearchSubmit}>
      {(handleChange, handleSubmit, inputValue) => (
        <InputBox
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputValue={inputValue}
        />
      )}
    </SearchContainer>
  );
};

export default SearchVideos;

SearchVideos.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
};
