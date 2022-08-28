import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Input = styled.input.attrs({ 
    type: 'text',
    placeholder: "Your Notification"
  })`
    background: #ddd;
    color: #000;
    font-family: monospace;
    cursor: auto;
    margin-bottom: 0;
    padding: 3px;
    width: 80%;
    border-radius: 5px;
    border: transparent;
    height: 24px;
    text-align: center;
    &:focus {
      background-color: #fff;
    }
  `

export const Description = styled.textarea.attrs({
    placeholder: "Write a meaningful reminder!"
  })`
    resize: none;
    background: #ddd;
    color: #000;
    font-family: monospace;
    cursor: auto;
    margin-bottom: 0;
    width: 80%;
    padding: 3px;
    border: transparent;
    border-radius: 5px;
    height: 50px;
    text-align: left;
    &:focus {
      background-color: #fff;
    }
  `

export const TimeSelecter = styled.input.attrs({
    type: 'time',
    min: "00:00",
    max: "24:00"
  })`
    color: #000;
    background: #ddd;
    font-family: monospace;
    border: transparent;
    padding: 3px;
    border-radius: 5px;
    &:focus {
      background-color: #fff;
    }
  `

export const CheckBox = styled.input.attrs({
    type: "checkbox"
  })`
    color: #000;
    background: #ddd;
    &:hover {
      cursor: pointer;
    }
  `

export const SubmitButton = styled.button`
  width: 40%;
  background-color: #363636;
  color: #eeeeee;
  height: 24px;
  font-family: monospace;
  text-transform: uppercase;
  border: transparent;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #eee;
    color: #000;
    opacity: 0.6;
  }
`