import styled, { css } from 'styled-components';
import { rem } from "polished";

/* units */
const sizeUnit = 1;

/* sizes */
const createSize = size => rem(`${size * sizeUnit}px`);

const sizes = {
  sm: createSize(20),
  md: createSize(30),
  lg: createSize(50)
};

const size = size => {
  if (typeof sizes[size] !== "undefined") {
    return sizes[size];
  } else {
    return sizes["md"];
  }
};

const removeDefaultButton = css`
  border: 0;
  padding: 0;
  font-family: inherit;
  font-weight: normal;
  background: unset;
  box-sizing: border-box;
  outline: none;
`;

const Wrapper = styled.button`
  ${removeDefaultButton}
  height: ${props => size(props.size)};
  width: ${props => size(props.size)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #363636;
  float: right;
  text-shadow: 1px 1px 1px lightgrey;
  color: ${props => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export default {
  Wrapper
};