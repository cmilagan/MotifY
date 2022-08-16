import React from "react";
import PropTypes from "prop-types";

import Style from "./styles";

const Header = ({size, children}) => (
  <Style.Wrapper size={size}>
    {children}
  </Style.Wrapper>
)

Header.defaultProps = {
  size: "md"
};

Header.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"])
};

export default Header;