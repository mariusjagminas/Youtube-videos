import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ children, onSearchSubmit }) => {
  const [state, setState] = useState({ inputValue: "" });

  const handleChange = e => {
    setState({ inputValue: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearchSubmit(state.inputValue);
  };

  return <>{children(handleChange, handleSubmit, state.inputValue)}</>;
};

export default Search;

Search.propTypes = {
  children: PropTypes.func,
  onSearchSubmit: PropTypes.func
};
