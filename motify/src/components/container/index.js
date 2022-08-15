import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  height: 90vh;
  width: 100vw;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;