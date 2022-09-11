/*global chrome */

import React, { useState, useEffect } from "react";
import "../App.css"

import styled from "styled-components"
import { localMode, PURPLE, BLUE, RED, GREEN, TEAL } from "../utils/constants";
import Stack from "../components/layout";
import ColorButton from "../components/color";
import { Input, Description, SubmitButton, TimeSelecter } from "../components/inputs";

const Modal = styled.div`
  z-index: 1000 !important;
  border: 1px solid grey;
  position: fixed;
  top: 30%;
  left: 25%;
  margin-top: -12vh;
  margin-left: -15vw;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgb(0 0 0 / 0.2);
`

const Header = styled.div`
  height: 30px;
  background-color: #363636;
  -moz-border-radius: 10px 10px 0 0;
`

const Title = styled.h1`
  font-size: 12px;
  font-family: monospace;
  float: left;
  margin-left: 10px;
  color: #eeeeee;
`

const StyledButton = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  margin-right: 5px;
  background-color: #363636;
  float: right;
  font-size: 12px;
  text-shadow: 1px 1px 1px lightgrey;
  color: white;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
const StyledContainer = styled.div`
  color: dark grey;
  background-color: #36363636;
  height: 45vh;
  width: 80vw;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EditModal = (props) => {
  const [notifications, setNotifications] = useState([]);
  const url = window.location.href;

  // get Notifications if they're there
  useEffect(() => {
    if (!localMode) {
      chrome.storage.local.get(url, (items) => {
        items[url] && setNotifications(items[url]);
      });
    }
  }, []);

  // set()
  useEffect(() => {
    if (!localMode) {
      notifications.length > 0
        ? chrome.storage.local.set({ [url]: notifications })
        : chrome.storage.local.remove(url);
    }
  }, [notifications]);

  function selectColor(evt, color) {
    let i, colors;
    colors = document.getElementsByClassName("color-selector");
    console.log(colors);
    for (i = 0; i < colors.length; i++) {
      colors[i].style.opacity = 1;
    }
    evt.currentTarget.style.opacity = 0.4;
  }

  return (props.trigger) ? (
    <div>
      <Modal>
        <Header>
        <Title>
          Edit Notification
        </Title>
        <StyledButton onClick={() => {props.setTrigger(false);}}>&#10006;</StyledButton>
        </Header>
        <StyledContainer>
          <Stack direction="column" margin="xs" spacing={2}>
            <Stack direction="row" spacing={0} margin="none">
              <div className="color-selector" onClick={(event) => {selectColor(event, PURPLE)}}>
                <ColorButton color={PURPLE} id="black-selector"/>
              </div>
              <div className="color-selector" onClick={(event) => {selectColor(event, BLUE)}}>
                <ColorButton color={BLUE} id="blue-selector"/>
              </div>
              <div className="color-selector" onClick={(event) => {selectColor(event, RED)}}>
                <ColorButton color={RED} id="red-selector"/>            
              </div>
              <div className="color-selector" onClick={(event) => {selectColor(event, GREEN)}}>
                <ColorButton color={GREEN} id="green-selector"/>            
              </div>
              <div className="color-selector" onClick={(event) => {selectColor(event, TEAL)}}>
                <ColorButton color={TEAL} id="teal-selector"/>            
              </div>
            </Stack>
            <Input />
            <Description />
            <TimeSelecter />
            <SubmitButton>Submit</SubmitButton>
          </Stack>
        </StyledContainer>
      </Modal>
    </div>
  ) : "";
}

export default EditModal;