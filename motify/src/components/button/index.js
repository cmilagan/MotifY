import React from "react";
import PropTypes from "prop-types";

import Style from "./styles";

const StyledButton = ({size, color, children}) => (
  <Style.Wrapper size={size} color={color}>
    {children}
  </Style.Wrapper>
)

StyledButton.defaultProps = {
  size: "md",
  color: "#eeeeee"
};

StyledButton.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.string
};

export default StyledButton;