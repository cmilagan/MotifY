import React from "react";
import PropTypes from "prop-types";

import Style from "./styles";
import { TEAL } from "../../utils/constants";

const ColorButton = ({ color }) => (
  <Style.Wrapper color={color} />
);

ColorButton.defaultProps = {
  color: TEAL
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorButton;
