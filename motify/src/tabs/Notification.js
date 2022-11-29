/*global chrome */

import React, { useState, useEffect } from "react";
import "../App.css"

import styled from "styled-components"
import { localMode } from "../utils/constants";
import { ShadowRoot } from "../utils/ShadowRoot";
import NotificationModal from "../components/notification";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const url = window.location.href;

  // get Notifications if they're there
  useEffect(() => {
    if (!localMode) {
      chrome.storage.local.get(url, (items) => {
        items[url] && setNotifications(items[url]);
      });
    }
  }, []);

  // set()
  useEffect(() => {
    if (!localMode) {
      notifications.length > 0
        ? chrome.storage.local.set({ [url]: notifications })
        : chrome.storage.local.remove(url);
    }
  }, [notifications])
  return (
    <ShadowRoot>
      <NotificationModal color={"red"} title={"hello"} message={"drink water"} />
      {Array.isArray(notifications)
        ? notifications.map((item, idx) => {
            return <NotificationModal color={item["notification_color"]} title={item["notification_title"]} message={item["notification_message"]} />
        })
      : null}
    </ShadowRoot>
  );
}

export default Notification;