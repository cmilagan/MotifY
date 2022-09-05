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
  const [form, setForm] = useState({
    notification_color: null,
    notification_title: "",
    notification_description: "",
    notification_time: "",
    notification_recurring: null,
  });

  // get notifications to display in popup.html
  useEffect(() => {
    if(!localMode) {
      chrome.storage.local.get((items) => {
        setNotifications(items);
      })
    }
  }, []);

  const setValue = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  function createNotification() {
    let data = form;
    console.log(data);
  }
  function selectColor(evt, color) {
    let i, colors;
    colors = document.getElementsByClassName("color-selector");
    console.log(colors);
    for (i = 0; i < colors.length; i++) {
      colors[i].style.opacity = 1;
    }
    evt.currentTarget.style.opacity = 0.4;
    setValue("notification_color", color);
  }

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
            <div className="color-selector" onClick={(event) => {selectColor(event, BLACK)}}>
              <ColorButton color={BLACK} id="black-selector"/>
            </div>
            <div className="color-selector" onClick={(event) => {selectColor(event, BLUE)}}>
              <ColorButton color={BLUE} id="blue-selector"/>
            </div>
            <div className="color-selector" onClick={(event) => {selectColor(event, RED)}}>
              <ColorButton color={RED} id="red-selector"/>            
            </div>
            <div className="color-selector" onClick={(event) => {selectColor(event, GREEN)}}>
              <ColorButton color={GREEN} id="green-selector"/>            
            </div>
            <div className="color-selector" onClick={(event) => {selectColor(event, TEAL)}}>
              <ColorButton color={TEAL} id="teal-selector"/>            
            </div>
          </Stack>
          <Title size="sm">
            Notification Title
          </Title>
          <Input onChange={(event) => {setValue("notification_title", event.target.value)}}/>
          <Title size="sm">
            Notification Description
          </Title>
          <Description onChange={(event) => {setValue("notification_description", event.target.value)}}/>
          <Title size="sm">
            Notification Time
          </Title>
          <TimeSelecter onChange={(event) => {setValue("notification_time", event.target.value)}}/>
          <div>
            <Title size="sm">
              Recurring
            </Title>
            <CheckBox onChange={(event) => {setValue("notification_recurring", event.target.checked)}}/>
          </div>
          <SubmitButton onClick={() => {createNotification()}}>Submit</SubmitButton>
        </Stack>
      </Container>
    </div>
  )
}