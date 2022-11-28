/*global chrome */

import React, { useState, useEffect } from "react";
import "../App.css"

import styled from "styled-components"
import { localMode, PURPLE, BLUE, RED, GREEN, TEAL } from "../utils/constants";
import Stack from "../components/layout";
import ColorButton from "../components/color";
import { Input, Description, SubmitButton, TimeSelecter, CheckBox } from "../components/inputs";
import Item from "../components/item";

const Modal = styled.div`
  z-index: 1000 !important;
  border: 1px solid grey;
  position: fixed;
  top: 30%;
  left: 25%;
  margin-top: -12vh;
  margin-left: -15vw;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgb(0 0 0 / 0.2);
`

const Header = styled.div`
  height: 30px;
  background-color: #363636;
  -moz-border-radius: 10px 10px 0 0;
`

const Title = styled.h1`
  font-size: 12px;
  font-family: monospace;
  float: left;
  margin-left: 10px;
  color: #eeeeee;
`

const StyledButton = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  margin-right: 5px;
  background-color: #363636;
  float: right;
  font-size: 12px;
  text-shadow: 1px 1px 1px lightgrey;
  color: white;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
const StyledContainer = styled.div`
  color: dark grey;
  background-color: #363636;
  height: 60vh;
  width: 80vw;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EditModal = (props) => {
  const url = window.location.href;
  const [form, setForm] = useState({
    notification_color: props.item.notification_color,
    notification_title: props.item.notification_title,
    notification_description: props.item.notification_description,
    notification_time: props.item.notification_time,
    notification_recurring: props.item.notification_recurring,
  });


  // update chrome storage whenever notifications changes
  useEffect(() => {
    console.log("hello world");
    props.notifications.length > 0
      ? chrome.storage.local.set({ "allNotifications": props.notifications })
      : chrome.storage.local.remove("allNotifications");
  }, [props.notifications]);

  const setValue = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  useEffect(() => {
    console.log(form)
  }, []);

  function editNotification() {
    props.setNotifications(props.notifications.filter(item => item !== props.notifications[props.idx]))
    props.setNotifications(prevNotif => [...prevNotif, form])
  }

  function selectColor(evt, color) {
    let i, colors;
    colors = document.getElementsByClassName("color-selector");
    for (i = 0; i < colors.length; i++) {
      colors[i].style.opacity = 1;
    }
    evt.currentTarget.style.opacity = 0.4;
    setValue("notification_color", color);
  }

  return (props.trigger) ? (
    <div>
      <Modal>
        <Header>
        <Title>
          Edit Notification
        </Title>
        <StyledButton onClick={() => {props.setTrigger(false);}}>&#10006;</StyledButton>
        </Header>
        <StyledContainer>
          <Stack direction="column" margin="xs" spacing={2}>
            <Stack direction="row" spacing={0} margin="none">
              <div className="color-selector" onClick={(event) => {selectColor(event, PURPLE)}} id="purple-selector">
                <ColorButton color={PURPLE}/>
              </div>
              <div className="color-selector" onClick={(event) => {selectColor(event, BLUE)}} id="blue-selector">
                <ColorButton color={BLUE}/>
              </div>
              <div className="color-selector" onClick={(event) => {selectColor(event, RED)}} id="red-selector">
                <ColorButton color={RED}/>            
              </div>
              <div className="color-selector" onClick={(event) => {selectColor(event, GREEN)}} id="green-selector">
                <ColorButton color={GREEN}/>            
              </div>
              <div className="color-selector" onClick={(event) => {selectColor(event, TEAL)}} id="teal-selector">
                <ColorButton color={TEAL}/>            
              </div>
            </Stack>
            <Input value={form.notification_title} onChange={(event) => {setValue("notification_title", event.target.value)}}/>
            <Description value={form.notification_description} onChange={(event) => {setValue("notification_description", event.target.value)}}/>
            <TimeSelecter value={form.notification_time} onChange={(event) => {setValue("notification_time", event.target.value)}}/>
            <Title size="sm">
              Recurring
            </Title>
            <CheckBox checked={form.notification_recurring} onChange={(event) => {setValue("notification_recurring", event.target.checked)}}/>
            <SubmitButton onClick={() => {editNotification(); props.setTrigger(false);}}>Submit</SubmitButton>
          </Stack>
        </StyledContainer>
      </Modal>
    </div>
  ) : "";
}

export default EditModal;