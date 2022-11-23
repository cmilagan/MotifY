/* global chrome */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Title from "../title";
import Style from "./styles";
import StyledButton from "../button";

import { FaEdit, FaTrashAlt  } from "react-icons/fa";
import { TEAL } from "../../utils/constants";
import EditModal from "../../tabs/EditModal";

const Item = ({id, item, idx, setNotifications, notifications}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    notifications.length > 0
      ? chrome.storage.local.set({ "allNotifications": notifications })
      : chrome.storage.local.remove("allNotifications");
  }, [notifications]);

  const handleRemoveItem = () => {
    notifications.splice(idx, 1);
    setNotifications(notifications);
    document.getElementById(id).style.display = "none";
  }

  return (
    <div id={id}>
      <Style.Wrapper>
        <Style.ColorBlock color={item.notification_color}/>
        <Style.Container>
          <Title size="sm">
            {item.notification_title}
          </Title>
          <Style.ButtonContainer>
            <StyledButton size="sm" color="#ff1818" onClick={() => {handleRemoveItem()}}>
              <FaTrashAlt />
            </StyledButton>
            <StyledButton size="sm" onClick={() => {setOpen(true)}}>
              <FaEdit />
            </StyledButton>
          </Style.ButtonContainer>
        </Style.Container>
      </Style.Wrapper>
      <EditModal trigger={open} setTrigger={setOpen} item={item} setNotifications={setNotifications} notifications={notifications} id={id} idx={idx}/ >
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;