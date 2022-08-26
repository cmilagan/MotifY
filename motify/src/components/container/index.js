import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  display: flex;
  height: 440px;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  width: 100vw;
  text-align: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  > * {
    width: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;