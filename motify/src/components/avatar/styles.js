import styled from "styled-components";
import { rem } from "polished";

/* units */
const sizeUnit = 6;

/* sizes */
const createSize = size => rem(`${size * sizeUnit}px`);

const sizes = {
  sm: createSize(3),
  md: createSize(4),
  lg: createSize(5)
};

const size = size => {
  if (typeof sizes[size] !== "undefined") {
    return sizes[size];
  } else {
    return sizes["md"];
  }
};

/* components */
const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border: ${rem("2px")} solid #ddd;
  padding: ${rem("2px")};
  width: ${props => size(props.size)};
  height: ${props => size(props.size)};
  background-color: white;
`;

export default {
  Image,
  Wrapper
};
