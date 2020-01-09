import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import SearchBox from "";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";

const styles = theme => ({
  navBar: {
    backgroundColor: theme.palette.grey[100],
    position: "fixed",
    [theme.breakpoints.up("sm")]: {
      position: "relative"
    }
  },
  progress: {
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
    bottom: 0
  },
  progressBar: { background: "red" },
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

const NavBar = ({ onSearchSubmit, classes, loading }) => {
  return (
    <AppBar elevation={1} className={classes.navBar}>
      {loading ? (
        <LinearProgress
          color="primary"
          className={classes.progress}
          classes={{
            barColorPrimary: classes.progressBar
          }}
        />
      ) : null}
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

NavBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
