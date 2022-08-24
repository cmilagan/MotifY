/* global chrome */
import React, { useState, useEffect } from "react";

import { localMode } from "../utils/constants";
import { Container } from "../components/container";
import Title from "../components/title";
import Header from "../components/header";
import Item from "../components/item";

export const Home = () => {
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
    </div>
  )
}