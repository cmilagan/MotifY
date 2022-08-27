import styled from "styled-components";
import { rem } from "polished";


const Wrapper = styled.button`
  box-sizing: border-box;
  border-radius: 50%;
  border: ${rem("2px")} solid #ddd;
  padding: ${rem("2px")};
  width: 24px;
  height: 24px;
  background-color: ${props => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export default {
  Wrapper
};
