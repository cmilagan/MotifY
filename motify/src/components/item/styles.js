import styled from "styled-components";
import { rem } from "polished";

const Wrapper = styled.div`
  display: flex;
`

const Container = styled.div`
  width: 92%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
`;

const ColorBlock = styled.div`
  width: 3%;
  height: 40px;
  background-color: ${props => props.colour};
`

export default {
  Wrapper,
  Container
};