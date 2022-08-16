import React from "react";
import PropTypes from "prop-types";

import Style from "./styles";

const Title = ({size, children}) => (
  <Style.Wrapper size={size}>
    {children}
  </Style.Wrapper>
)

Title.defaultProps = {
  size: "md"
};

Title.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"])
};

export default Title;