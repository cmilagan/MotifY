import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Notification from './Notification';
import reportWebVitals from './reportWebVitals';

const insertionPoint = document.createElement("div");
insertionPoint.id = "insertion-point";
document.body.parentNode.insertBefore(insertionPoint, document.body);

ReactDOM.render(
  <React.StrictMode>
    <Notification />
  </React.StrictMode>,
  insertionPoint
);