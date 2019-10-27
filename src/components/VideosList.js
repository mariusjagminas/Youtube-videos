import React from "react";
import List from "@material-ui/core/List";
import VideoItem from "../components/VideoItem";
import PropTypes from "prop-types";

const VideosList = ({ videos, changeMainVideo }) => {
  return (
    <List>
      {videos.map((vid, i) => (
        <VideoItem
          index={i}
          changeMainVideo={changeMainVideo}
          key={vid.id.videoId}
          videoId={vid.id.videoId}
          title={vid.snippet.title}
          imgUrl={vid.snippet.thumbnails.medium.url}
          channelTitle={vid.snippet.channelTitle}
        />
      ))}
    </List>
  );
};

export default VideosList;

VideosList.propTypes = {
  videos: PropTypes.array.isRequired
};
