import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Message = ({ message }) => {
  return (
    <>
      {message ? (
        <Typography component="h3" variant="h3">
          {message}
        </Typography>
      ) : null}
    </>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.string
};
