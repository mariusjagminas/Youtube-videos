import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault(e);
    this.props.onSearchSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return this.props.children(
      this.handleChange,
      this.handleSubmit,
      this.state.inputValue
    );
  }
}

export default Search;

Search.propTypes = {
  children: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired
};
