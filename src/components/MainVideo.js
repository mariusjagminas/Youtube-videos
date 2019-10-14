import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles({
  container: {
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%",
    overflow: "hidden"
  },
  iframe: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: 0
  }
});

const MainVideo = ({ currentVideo }) => {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <iframe
          titlr={currentVideo.snippet.title}
          className={classes.iframe}
          src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
          allowFullScreen={true}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {currentVideo.snippet.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {currentVideo.snippet.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MainVideo;
