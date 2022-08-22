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
import Item from "../components/item";

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
    console.log("hello")
    window.close();
  };

  return (
    <div>
      <Header size="lg">
        <Avatar
          imageUrl="https://i.pinimg.com/736x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"
          username="motify"
          size="md"
        />
        <StyledButton size="lg" onClick={() => {closeTab()}}>
          <Title size="lg">
            x
          </Title>
        </StyledButton>
      </Header>
      <Header size="md">
        <Title size="md">
          Notifications
        </Title>
      </Header>
      <Container>
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />
        <Item title="Workout" notification="Get off your chair now!" />

      </Container>
      <Footer>
        <StyledButton size="lg">
          <Title size="lg">
            &#x2302;
          </Title>
        </StyledButton>
        <StyledButton size="lg">
          <Title size="lg">
            &#43;
          </Title>
        </StyledButton>
      </Footer>
    </div>
  )
}