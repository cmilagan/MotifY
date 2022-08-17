import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  display: block;
  justify-content: center;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  width: 100vw;
  -ms-overflow-style: none;
  scrollbar-width: none;
  > * {
    width: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;