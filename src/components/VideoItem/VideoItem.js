import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const styles = theme => ({
  gridContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },

  imgContainer: {
    width: "100%",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden"
  },
  img: {
    width: "100%"
  }
});

const VideoItem = ({
  imgUrl,
  title,
  channelTitle,
  index,
  classes,
  changeMainVideo
}) => {
  return (
    <>
      <ListItem
        button
        onClick={changeMainVideo.bind(null, index)}
        data-test="button"
      >
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={8}>
            <div className={classes.imgContainer}>
              <img className={classes.img} alt={title} src={imgUrl} />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Typography
              noWrap={true}
              component="h2"
              variant="body1"
              color="textPrimary"
            >
              {title}
            </Typography>
            <Typography
              noWrap={true}
              component="div"
              variant="body2"
              color="textSecondary"
            >
              {channelTitle}
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
};

export default withStyles(styles)(VideoItem);

VideoItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  changeMainVideo: PropTypes.func.isRequired
};
