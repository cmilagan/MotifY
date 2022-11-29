import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 1000 !important;
  border: 1px solid grey;
  position: fixed;
  top: 50%;
  left: 25%;
  margin-top: -12vh;
  margin-left: -15vw;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgb(0 0 0 / 0.2);
`;

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

const Body = styled.p`
  font-size: 12px;
  font-family: monospace;
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
  height: 10vh;
  width: 80vw;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default {
  Wrapper,
  Header,
  Title,
  StyledButton,
  StyledContainer,
  Body
};