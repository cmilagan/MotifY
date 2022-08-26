import React from "react";
import PropTypes from "prop-types";

import Style from "./styles";

const Stack = ({spacing, direction, margin, children}) => (
  <Style.Wrapper spacing={spacing} direction={direction} margin={margin}>
    {children}
  </Style.Wrapper>
)

Stack.defaultProps = {
  spacing: "md",
  direction: "row",
  margin: "none"
};

Stack.propTypes = {
  spacing: PropTypes.oneOf([1, 2, 3]),
  direction: PropTypes.string,
  margin: PropTypes.oneOf(["none", "sm", "md", "lg"])
};

export default Stack;