import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Message = ({ errorMessage }) => {
  const message = {
    noVideos: "No videos were found, please try another search",
    error: `Something went wrong, please try again later.
  Error: ${errorMessage}`
  };

  return (
    <div>
      <Typography component="h3" variant="h3">
        {errorMessage ? message.error : message.noVideos}
      </Typography>
    </div>
  );
};

export default Message;

Message.propTypes = {
  errorMessage: PropTypes.string
};
