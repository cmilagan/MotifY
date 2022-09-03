import React from "react";
import PropTypes from "prop-types";

import Style from "./styles";
import { TEAL } from "../../utils/constants";

const ColorButton = ({ color, onClick }) => (
  <Style.Wrapper color={color} onClick={onClick} />
);

ColorButton.defaultProps = {
  color: TEAL
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorButton;
