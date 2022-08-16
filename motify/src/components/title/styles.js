import styled from "styled-components";
import { rem } from "polished";

/* units */
const sizeUnit = 1;

/* sizes */
const createSize = size => rem(`${size * sizeUnit}px`);

const sizes = {
  sm: createSize(14),
  md: createSize(18),
  lg: createSize(24)
};

const size = size => {
  if (typeof sizes[size] !== "undefined") {
    return sizes[size];
  } else {
    return sizes["md"];
  }
};

const Wrapper = styled.h1`
  font-size: ${props => size(props.size)};
  font-family: monospace;
  float: left;
  margin-left: 10px;
  color: #eeeeee;
  font-weight: 200;
`;

export default {
  Wrapper
};