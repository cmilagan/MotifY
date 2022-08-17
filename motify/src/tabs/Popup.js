/* global chrome */
import React, { useState, useEffect } from "react";
import styled from "styled-components"

import { localMode } from "../utils/constants";
import Avatar from "../components/avatar";
import { Container } from "../components/container";
import Title from "../components/title";
import Header from "../components/header";
import { Footer } from "../components/footer";
import StyledButton from "../components/button";

const popupRoot = document.getElementById("popup-root");


export const Popup = () => {
  const [notifications, setNotifications] = useState([]);

  // get notifications to display in popup.html
  useEffect(() => {
    if(!localMode) {
      chrome.storage.local.get((items) => {
        setNotifications(items);
      })
    }
  }, []);

  const closeTab = () => {
    document.elementFromPoint(0, 1).click();
  };

  return (
    <div>
      <Header size="lg">
        <Avatar
          imageUrl="https://i.pinimg.com/736x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"
          username="motify"
          size="md"
        />
        <StyledButton onClick={() => {closeTab()}}>
          &#9587;
        </StyledButton>
      </Header>
      <Header size="md">
        <Title size="md">
          Notifications
        </Title>
      </Header>
      <Container>
        <Title size="sm">
          Hello
        </Title>
      </Container>
      <Footer>
        <StyledButton size="lg">
          &#x2302;
        </StyledButton>
        <StyledButton size="lg">
          &#43;
        </StyledButton>
      </Footer>
    </div>
  )
}