/* global chrome */
import React, { useState, useEffect } from "react";
import styled from "styled-components"

import { localMode } from "../utils/constants";
import Avatar from "../components/avatar";
import { Container } from "../components/container";
import { Title } from "../components/title";
import { Header } from "../components/header";


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

  return (
    <Container>
      <Header>
        <Avatar
          imageUrl="https://freeiconshop.com/wp-content/uploads/edd/notification-flat.png"
          username="motify"
          size="md"
        />
        <Title>Notifications</Title>
      </Header>
    </Container>
  )
}