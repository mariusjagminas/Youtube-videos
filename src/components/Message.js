import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Message = ({ message }) => {
  return (
    <>
      {message ? (
        <Box p={2}>
          <Typography component="h3" variant="h3">
            {message}
          </Typography>
        </Box>
      ) : null}
    </>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.string
};
