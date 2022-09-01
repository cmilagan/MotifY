/*global chrome */

import React, { useState, useEffect } from "react";
import "../App.css"

import styled from "styled-components"
import { localMode, BLACK, BLUE, RED, GREEN, TEAL } from "../utils/constants";
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
  background-color: ${BLACK};
  height: 45vh;
  width: 80vw;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EditModal = () => {
  const [notifications, setNotifications] = useState([]);
  const [closed, setClosed] = useState(false);
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
  }, [notifications])
  return (
    <div>
      {!closed &&
        <Modal>
          <Header>
          <Title>
            Edit Notification
          </Title>
          <StyledButton onClick={() => {setClosed(true)}}>&#10006;</StyledButton>
          </Header>
          <StyledContainer>
            <Stack direction="column" margin="xs" spacing={2}>
              <Stack direction="row" spacing={0} margin="none">
                <ColorButton color={BLACK} id="black-selector" />
                <ColorButton color={BLUE} id="blue-selector" />
                <ColorButton color={RED} id="red-selector" />
                <ColorButton color={GREEN} id="green-selector" />
                <ColorButton color={TEAL} id="teal-selector" />
              </Stack>
              <Input />
              <Description />
              <TimeSelecter />
              <SubmitButton>Submit</SubmitButton>
            </Stack>
          </StyledContainer>
        </Modal>
      }
    </div>
  );
}

export default EditModal;