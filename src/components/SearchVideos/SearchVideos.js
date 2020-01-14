import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles, fade } from "@material-ui/core/styles";
import SearchContainer from "../SearchContainer/SearchContainer";
import PropTypes from "prop-types";

const styles = theme => ({
  search: {
    position: "relative",
    color: theme.palette.grey[900],
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      //TODO: what is that
      marginLeft: theme.spacing(1), //TODO: what is that
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

const SearchVideos = ({ onSearchSubmit, classes }) => {
  return (
    <SearchContainer onSearchSubmit={onSearchSubmit}>
      {(handleChange, handleSubmit, inputValue) => (
        <form onSubmit={handleSubmit} className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            value={inputValue}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            onChange={handleChange}
            inputProps={{ "aria-label": "search" }}
          />
        </form>
      )}
    </SearchContainer>
  );
};

export default withStyles(styles)(SearchVideos);

SearchVideos.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
};
