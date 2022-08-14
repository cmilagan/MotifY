import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Notification from './components/Notification';

import { Popup } from './components/Popup';

const popupRoot = document.getElementById("popup-root");

const insertionPoint = document.createElement("div");
insertionPoint.id = "insertion-point";
document.body.parentNode.insertBefore(insertionPoint, document.body);

!popupRoot && 
  ReactDOM.render(
    <React.StrictMode>
      <Notification />
    </React.StrictMode>,
    insertionPoint
  );

popupRoot &&
  ReactDOM.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>,
    popupRoot
  );