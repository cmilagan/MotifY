/* global chrome */
import React, { useState, useEffect } from "react";

import { localMode } from "../utils/constants";
import { Container } from "../components/container";
import Title from "../components/title";
import Header from "../components/header";
import Item from "../components/item";
import Stack from "../components/layout";
import Avatar from "../components/avatar";

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
            <Avatar
              imageUrl="https://i.pinimg.com/736x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"
              username="motify"
              size="md"
            />
            <Avatar
              imageUrl="https://i.pinimg.com/736x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"
              username="motify"
              size="md"
            />
            <Avatar
              imageUrl="https://i.pinimg.com/736x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"
              username="motify"
              size="md"
            />
            <Avatar
              imageUrl="https://i.pinimg.com/736x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"
              username="motify"
              size="md"
            />
            <Avatar
              imageUrl="https://i.pinimg.com/736x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"
              username="motify"
              size="md"
            />
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