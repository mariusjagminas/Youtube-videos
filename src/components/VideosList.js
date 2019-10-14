import React from "react";
import List from "@material-ui/core/List";
import VideoItem from "../components/VideoItem";

const VideosList = ({ videos }) => {
  return (
    <List>
      {videos.map(vid => (
        <VideoItem
          key={vid.snippet.title}
          title={vid.snippet.title}
          imgUrl={vid.snippet.thumbnails.medium.url}
          channelTitle={vid.snippet.channelTitle}
        />
      ))}
    </List>
  );
};

export default VideosList;
