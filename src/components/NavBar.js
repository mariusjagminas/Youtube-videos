import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  youtube: {
    marginRight: theme.spacing(2),
    fontSize: "30px",
    color: "red"
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
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
}));
const NavBar = () => {
  const classes = useStyles();

  const [state, setState] = useState({ inputValue: "" });
  const handleChange = e => {
    setState({ inputValue: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState({ inputValue: "" });
  };
  return (
    <AppBar position="static" className={classes.test}>
      <Container>
        <Toolbar variant="regular" className={classes.toolbar}>
          <YouTubeIcon className={classes.youtube} />
          <Typography className={classes.title} variant="h6" noWrap>
            Youtube Videos
          </Typography>
          <form onSubmit={handleSubmit} className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={state.inputValue}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onChange={handleChange}
              inputProps={{ "aria-label": "search" }}
            />
          </form>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
