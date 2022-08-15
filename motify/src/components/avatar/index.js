import React from "react";
import PropTypes from "prop-types";

import Style from "./styles";

const Avatar = ({ imageUrl, username, size }) => (
  <Style.Wrapper size={size}>
    <Style.Image src={imageUrl} alt={username} />
  </Style.Wrapper>
);

Avatar.defaultProps = {
  size: "md"
};

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  username: PropTypes.string.isRequired
};

export default Avatar;
