import styled from "styled-components";
import { rem } from "polished";

export const Footer = styled.div`
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #363636;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 -4px 2px -2px grey;
  > * {
    margin: 10px;
  };
`;