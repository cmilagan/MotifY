/* global chrome */
import React, { useState, useEffect } from "react";
import styled from "styled-components"

import { localMode } from "../utils/constants";

export const Popup = () => {
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
      <h3>Hello This is your notifications</h3>
    </div>
  )
}