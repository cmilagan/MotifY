import React from "react";
import PropTypes from "prop-types";

import Style from "./styles";

const ErrorModal = ({type, message, trigger, setTrigger}) => {

  return (trigger) ? (
    <Style.Wrapper>
      <Style.Header>
        <Style.Title>
          {type}
        </Style.Title>
        <Style.StyledButton onClick={() => {setTrigger(false);}}>&#10006;</Style.StyledButton>
      </Style.Header>
      <Style.StyledContainer>
        <Style.Body>
          {message}
        </Style.Body>
      </Style.StyledContainer>
    </Style.Wrapper>

  ) : "";
}

export default ErrorModal;