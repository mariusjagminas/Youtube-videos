import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Message = ({ message }) => {
  if (!message) return null;
  return (
    <Box p={2}>
      <Typography component="h2" variant="h3">
        {message}
      </Typography>
    </Box>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.string
};
