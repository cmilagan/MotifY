import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Style from "./styles";
import StyledButton from "../button";


const NotificationModal = ({color, title, message}) => {
  const [closed, setClosed] = useState(false);
  
  return (closed) ? (
    <Style.Modal>
      <Style.Header color={color}>
        <Style.Title>
          {title}
        </Style.Title>
        <StyledButton onClick={() => {setClosed(true)}}>&#10006;</StyledButton>
      </Style.Header>
      <Style.StyledTextArea>
        {message}
      </Style.StyledTextArea>
    </Style.Modal>
  ) : "";
};


NotificationModal.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default NotificationModal
