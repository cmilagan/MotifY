import styled from "styled-components";
import { rem } from "polished";

const createSize = (size) => rem(`${size}px`);

const sizes = {
  sm: createSize(25),
  md: createSize(35),
  lg: createSize(50)
};

const size = size => {
  if (typeof sizes[size] !== "undefined") {
    return sizes[size];
  } else {
    return sizes["md"];
  }
};


const Wrapper = styled.div`
  height: ${props => size(props.size)};
  width: 100%;
  background-color: #363636;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 2px -2px grey;
  > * {
    margin: 10px;
  };
`;

export default {
  Wrapper
};