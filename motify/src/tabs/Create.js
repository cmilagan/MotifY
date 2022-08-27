/* global chrome */
import React, { useState, useEffect } from "react";

import { localMode } from "../utils/constants";
import { Container } from "../components/container";
import Title from "../components/title";
import Header from "../components/header";
import Stack from "../components/layout";
import ColorButton from "../components/color";
import { BLACK, BLUE, RED, GREEN, TEAL } from "../utils/constants";

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
          <input type="text" id="ntitle" name="ntitle" />
          <Title size="sm">
            Notification Description
          </Title>
          <textarea id="ndesc" name="ndesc" rows="4" cols="30"></textarea>
          <Title size="sm">
            Notification Time
          </Title>
          <input type="time" id="ntime" name="ntime" min="00:00" max="24:00"required></input>
          <div>
            <input type="checkbox" id="nrecurr" name="nrecurr" value={true} />
            <label for="nrecurr">
              <Title size="sm">
                Recurring Notification
              </Title>
            </label>
          </div>
        </Stack>
      </Container>
    </div>
  )
}