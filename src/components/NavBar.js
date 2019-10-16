import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import SearchBox from "../components/SearchBox";

const styles = theme => ({
  navBar: {
    backgroundColor: theme.palette.grey[100]
  },
  youtube: {
    marginRight: theme.spacing(2),
    fontSize: "30px",
    color: "red"
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: theme.palette.grey[900]
    }
  }
});

const NavBar = ({ onSearchSubmit, classes }) => {
  return (
    <AppBar position="static" elevation={1} className={classes.navBar}>
      <Container>
        <Toolbar variant="regular" className={classes.toolbar}>
          <YouTubeIcon className={classes.youtube} />
          <Typography className={classes.title} variant="h6" noWrap>
            Youtube Videos
          </Typography>
          <SearchBox onSearchSubmit={onSearchSubmit} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withStyles(styles)(NavBar);
