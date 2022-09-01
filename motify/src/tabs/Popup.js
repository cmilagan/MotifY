/* global chrome */
import React, { useState, useEffect } from "react";

import { localMode, HOME_TAB, CREATE_TAB } from "../utils/constants";
import Avatar from "../components/avatar";
import { Container } from "../components/container";
import Title from "../components/title";
import Header from "../components/header";
import { Footer } from "../components/footer";
import StyledButton from "../components/button";
import Item from "../components/item";
import { Home } from "./Home";
import { Create } from "./Create";
import EditModal from "./EditModal";

export const Popup = () => {
  const [tab, setTab] = useState(HOME_TAB);
  console.log("hello world");
  console.log("hello");
  console.log(React.version);

  return (
    <div>
      <Header size="lg">
        <Avatar
          imageUrl="https://i.pinimg.com/736x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"
          username="motify"
          size="md"
        />
        <StyledButton size="lg" onClick={() => {}}>
          <Title size="lg">
            x
          </Title>
        </StyledButton>
      </Header>
      {tab === HOME_TAB
        ? <Home />
        : <Create />
      }
      <Footer>
        <button onClick={() => {setTab(HOME_TAB)}}>
          h
        </button>
        <button onClick={() => {setTab(CREATE_TAB)}}>
          c
        </button>
        <StyledButton size="lg" onClick={() => {setTab(HOME_TAB)}}>
          <Title size="lg">
            &#x2302;
          </Title>
        </StyledButton>
        <StyledButton size="lg" onClick={() => {setTab(CREATE_TAB)}}>
          <Title size="lg">
            &#43;
          </Title>
        </StyledButton>
      </Footer>
      <EditModal />
    </div>
  )
}