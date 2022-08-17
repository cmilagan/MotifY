import React from "react";
import PropTypes from "prop-types";

import Style from "./styles";

const StyledButton = ({size, children}) => (
  <Style.Wrapper size={size}>
    {children}
  </Style.Wrapper>
)

StyledButton.defaultProps = {
  size: "md"
};

StyledButton.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"])
};

export default StyledButton;