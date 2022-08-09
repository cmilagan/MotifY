import React, { useState, useEffect } from "react";
import "./App.css"

import styled from "styled-components"

/** Color Palette
 * #363636 - Charcoal black
 * #243748 - Navy 
 * #800020 - Burgundy
 * #50C878 - Emerald Green
 */

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  background:rgba(0,0,0,0.2);
`

const Modal = styled.div`
  z-index: 2;
  border: 1px solid grey;
  position: absolute;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgb(0 0 0 / 0.2);
`

const Header = styled.div`
  height: 4vh;
  background-color: #363636;
  -moz-border-radius: 10px 10px 0 0;
`

const StyledButton = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  background-color: #363636;
  float: right;
  font-size: 20px;
  text-shadow: 1px 1px 1px lightgrey;
  color: white;
  &:hover {
    cursor: pointer;
  }
`
const StyledTextArea = styled.div`
  color: dark grey;
  background-color: #eeeeee;
  height: 20vh;
  width: 30vw;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  font-size: 18px;
`

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  return (
    <div>
      <Container>
        <Modal>
          <Header>
            <StyledButton>&#10006;</StyledButton>
          </Header>
          <StyledTextArea>
            <p>
              Hello
            </p>
          </StyledTextArea>
        </Modal>
      </Container>
    </div>
  );
}

export default Notification;