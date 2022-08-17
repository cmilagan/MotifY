/*global chrome */

import React, { useState, useEffect } from "react";
import "../App.css"

import styled from "styled-components"
import { localMode } from "../utils/constants";
import { ShadowRoot } from "../utils/ShadowRoot";

/** Color Palette
 * #363636 - Charcoal black
 * #243748 - Navy 
 * #800020 - Burgundy
 * #50C878 - Emerald Green
 */

const Modal = styled.div`
  z-index: 1000 !important;
  border: 1px solid grey;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -12vh;
  margin-left: -15vw;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgb(0 0 0 / 0.2);
`

const Header = styled.div`
  height: 4vh;
  background-color: #363636;
  -moz-border-radius: 10px 10px 0 0;
`

const Title = styled.h1`
  font-size: 1.5vh;
  font-family: monospace;
  float: left;
  margin-left: 10px;
  color: #eeeeee;
`

const StyledButton = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  background-color: #363636;
  float: right;
  font-size: 20px;
  text-shadow: 1px 1px 1px lightgrey;
  color: white;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
const StyledTextArea = styled.div`
  color: dark grey;
  background-color: #eeeeee;
  height: 20vh;
  width: 30vw;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  font-size: 18px;
`

const Notification = () => {
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
    <ShadowRoot>
      {!closed &&
        <Modal>
          <Header>
            <Title>
              Hello
            </Title>
            <StyledButton onClick={() => {setClosed(true)}}>&#10006;</StyledButton>
          </Header>
          <StyledTextArea>
            Hello
          </StyledTextArea>
        </Modal>      
      }
    </ShadowRoot>
  );
}

export default Notification;