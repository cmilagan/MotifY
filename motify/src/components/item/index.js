import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Title from "../title";
import Style from "./styles";
import StyledButton from "../button";

import { FaEdit, FaTrashAlt  } from "react-icons/fa";
import { TEAL } from "../../utils/constants";
import EditModal from "../../tabs/EditModal";

const Item = ({title, color}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Style.Wrapper>
        <Style.ColorBlock color={color}/>
        <Style.Container>
          <Title size="sm">
            {title}
          </Title>
          <Style.ButtonContainer>
            <StyledButton size="sm" color="#ff1818">
              <FaTrashAlt />
            </StyledButton>
            <StyledButton size="sm" onClick={() => {setOpen(true)}}>
              <FaEdit />
            </StyledButton>
          </Style.ButtonContainer>
        </Style.Container>
      </Style.Wrapper>
      <EditModal trigger={open} setTrigger={setOpen}/>
    </div>
  )
}

Item.defaultProps = {
  color: TEAL
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  notification: PropTypes.string,
};

export default Item;