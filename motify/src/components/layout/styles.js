import styled from "styled-components";
import { rem } from "polished";

/* units */
const sizeUnit = 1;

/* sizes */
const createSize = size => rem(`${size * sizeUnit}px`);

const spacings = {
  1: createSize(8),
  2: createSize(12),
  3: createSize(18)
};

const margins = {
  "none": createSize(0),
  "sm": createSize(12),
  "md": createSize(18),
  "lg": createSize(24)
};

const spacing = spacing => {
  if (typeof spacings[spacing] !== "undefined") {
    return spacings[spacing];
  } else {
    return spacings[2];
  }
};

const margin = margin => {
  if (typeof margins[margin] !== "undefined") {
    return margins[margin];
  } else {
    return margins["none"];
  }
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: center;
  margin: ${props => margin(props.margin)} 0;

  > * {
    margin: ${props => spacing(props.spacing)} ${props => spacing(props.spacing)};
  }
`;

export default {
  Wrapper
};
