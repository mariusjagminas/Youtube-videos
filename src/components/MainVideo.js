import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  container: {
    position: "relative",
    width: "100%",
    // paddingTop: "30px",
    paddingBottom: "56.25%",
    overflow: "hidden"
  },
  iframe: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%"
  }
});

const MainVideo = ({ currentVideo }) => {
  const classes = useStyle();

  return (
    <Paper>
      <div className={classes.container}>
        <iframe
          className={classes.iframe}
          src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
          allowFullScreen={true}
        />
      </div>
    </Paper>
  );
};

export default MainVideo;
