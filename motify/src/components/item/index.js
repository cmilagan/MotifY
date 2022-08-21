import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Style from "./styles";

const Item = ({title, color}) => (
  <Style.Wrapper>
    <Style.ColorBlock color={color} />
    <Style.Container>
      {title}
      {title}
    </Style.Container>
  </Style.Wrapper>
)

Item.defaultProps = {
  color: "#ff8080"
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  notification: PropTypes.string,
};

export default Item;