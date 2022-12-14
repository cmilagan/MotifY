/* global chrome */
import React, { useState, useEffect } from "react";

import { localMode } from "../utils/constants";
import { Container } from "../components/container";
import Title from "../components/title";
import Header from "../components/header";
import Stack from "../components/layout";
import ColorButton from "../components/color";
import { PURPLE, BLUE, RED, GREEN, TEAL } from "../utils/constants";
import { Input, Description, TimeSelecter, CheckBox, SubmitButton } from "../components/inputs";
import ErrorModal from "../components/error";

export const Create = (props) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    notification_color: null,
    notification_title: "",
    notification_description: "",
    notification_time: "",
    notification_recurring: null,
  });

  const setValue = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // update chrome storage whenever notifications changes
  useEffect(() => {
    props.notifications.length > 0
      ? chrome.storage.local.set({ "allNotifications": props.notifications })
      : chrome.storage.local.remove("allNotifications");
    console.log(props.notifications);
  }, [props.notifications]);

  function createNotification() {
    let data = form;
    if (data["notification_color"] == null) {
      console.log("hello world")
      setType("Error missing field");
      setMessage("Please choose a notification colour");
      setOpen(true);
    } else if (data["notification_title"] == "") {
      setType("Error missing field");
      setMessage("Please give a title to your notification");
      setOpen(true);
    } else if (data["notification_description"] == "") { 
      setType("Error missing field");
      setMessage("Please describe your notification");
      setOpen(true);    
    } else if (data["notification_time"] == "") {
      setType("Error missing field");
      setMessage("Please select a time");
      setOpen(true);
    } else {
      props.setNotifications(prevNotif => [...prevNotif, data])
      setType("Success");
      setMessage("Notification created");
      setOpen(true);
    }
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
            <div className="color-selector" onClick={(event) => {selectColor(event, PURPLE)}}>
              <ColorButton color={PURPLE} id="black-selector"/>
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
      <ErrorModal type={type} message={message} trigger={open} setTrigger={setOpen} />
    </div>
  )
}