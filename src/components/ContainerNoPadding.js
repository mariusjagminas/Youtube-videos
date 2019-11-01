import React from "react";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";

const ContainerNoPadding = ({ children, upTo, ...restProps }) => {
  const isNotWide = useMediaQuery(`(max-width:${upTo}px)`);
  return (
    <Container {...restProps} style={{ padding: isNotWide ? "0" : "16px" }}>
      {children}
    </Container>
  );
};

export default ContainerNoPadding;

ContainerNoPadding.propTypes = {
  upTo: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};
