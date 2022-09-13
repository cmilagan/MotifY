/* global chrome */
import React, { useState, useEffect } from "react";

import { localMode, HOME_TAB, CREATE_TAB } from "../utils/constants";
import Avatar from "../components/avatar";
import { Container } from "../components/container";
import Title from "../components/title";
import Header from "../components/header";
import { Footer } from "../components/footer";
import StyledButton from "../components/button";
import { Home } from "./Home";
import { Create } from "./Create";
import EditModal from "./EditModal";

export const Popup = () => {
  const [tab, setTab] = useState(HOME_TAB);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    document.getElementById("home-button").style.opacity = 0.4;
    // chrome.storage.local.remove("allNotifications");
    chrome.storage.local.get("allNotifications", (items) => {
      items["allNotifications"] && setNotifications(items["allNotifications"]);
    })
  }, []);

  function updatePage(evt, page_num) {
    let i, navlink;
    setTab(page_num);
    navlink = document.getElementsByClassName("navlink");
    for (i = 0; i < navlink.length; i++) {
      navlink[i].style.opacity = 1;
    }
    evt.currentTarget.style.opacity = 0.4;
  }
  
  return (
    <div>
      <Header size="lg">
        <Avatar
          imageUrl="https://i.pinimg.com/736x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"
          username="motify"
          size="md"
        />
        <StyledButton size="lg" onClick={() => {window.close()}}>
          <Title size="lg">
            x
          </Title>
        </StyledButton>
      </Header>
      {tab === HOME_TAB
        ? <Home notifications={notifications} setNotifications={setNotifications}/>
        : <Create notifications={notifications} setNotifications={setNotifications}/>
      }
      <Footer>
        <div class="navlink" id="home-button" onClick={(event) => {updatePage(event, HOME_TAB)}}>
          <StyledButton size="lg" id="home">
            <Title size="lg">
              &#x2302;
            </Title>
          </StyledButton>
        </div>
        <div class="navlink" id="create-button" onClick={(event) => {updatePage(event, CREATE_TAB)}}>
          <StyledButton size="lg" id="create">
            <Title size="lg">
              &#43;
            </Title>
          </StyledButton>
        </div>
      </Footer>
    </div>
  )
}