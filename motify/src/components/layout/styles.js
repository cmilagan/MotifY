import styled from "styled-components";
import { rem } from "polished";

const createSize = (size) => rem(`${size}px`);

const spacings = {
  0: createSize(4),
  1: createSize(8),
  2: createSize(12),
  3: createSize(18)
};

const margins = {
  "none": createSize(0),
  "xs": createSize(4),
  "sm": createSize(8),
  "md": createSize(12),
  "lg": createSize(18)
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
