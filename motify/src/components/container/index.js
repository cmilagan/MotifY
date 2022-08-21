import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
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