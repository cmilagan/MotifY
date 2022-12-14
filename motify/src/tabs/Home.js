/* global chrome */
import React, { useState, useEffect } from "react";

import { localMode } from "../utils/constants";
import { Container } from "../components/container";
import Title from "../components/title";
import Header from "../components/header";
import Item from "../components/item";

export const Home = (props) => {

  // sort notifications by color

  return (
    <div>
      <Header size="md">
        <Title size="md">
          Notifications
        </Title>
      </Header>
      <Container>
        {Array.isArray(props.notifications)
          ? props.notifications.map((item, idx) => {
              return <Item id={"item_" + String(idx)}item={item} idx={idx} setNotifications={props.setNotifications} notifications={props.notifications}/>
            })
          : null}
      </Container>
    </div>
  )
}