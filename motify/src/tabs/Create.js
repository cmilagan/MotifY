/* global chrome */
import React, { useState, useEffect } from "react";

import { localMode } from "../utils/constants";
import { Container } from "../components/container";
import Title from "../components/title";
import Header from "../components/header";
import Stack from "../components/layout";
import ColorButton from "../components/color";
import { BLACK, BLUE, RED, GREEN, TEAL } from "../utils/constants";
import { Input, Description, TimeSelecter, CheckBox, SubmitButton } from "../components/inputs";

export const Create = () => {
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
    <div>
      <Header size="md">
        <Title size="md">
          Create a Notification
        </Title>
      </Header>
      <Container>
        <Stack direction="column" margin="sm" spacing={1}>
          <Title size="sm">
            Notification Color
          </Title>
          <Stack direction="row" spacing={1} margin="none">
            <ColorButton color={BLACK} id="black-selector" />
            <ColorButton color={BLUE} id="blue-selector" />
            <ColorButton color={RED} id="red-selector" />
            <ColorButton color={GREEN} id="green-selector" />
            <ColorButton color={TEAL} id="teal-selector" />
          </Stack>
          <Title size="sm">
            Notification Title
          </Title>
          <Input />
          <Title size="sm">
            Notification Description
          </Title>
          <Description />
          <Title size="sm">
            Notification Time
          </Title>
          <TimeSelecter />
          <div>
            <Title size="sm">
              Recurring
            </Title>
            <CheckBox />
          </div>
          <SubmitButton>Submit</SubmitButton>
        </Stack>
      </Container>
    </div>
  )
}