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

export const Popup = () => {
  const [tab, setTab] = useState(HOME_TAB);

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
      {tab === 1
        ? <Create />
        : <Create />
      }
      <Footer>
        <StyledButton size="lg" onClick={() => {setTab(HOME_TAB);}}>
          <Title size="lg">
            &#x2302;
          </Title>
        </StyledButton>
        <StyledButton size="lg" onClick={() => {setTab(CREATE_TAB);}}>
          <Title size="lg">
            &#43;
          </Title>
        </StyledButton>
      </Footer>
    </div>
  )
}