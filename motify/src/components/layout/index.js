import styled from "styled-components";
import { rem } from "polished";

export const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${rem("64px")} 0;

  > div {
    margin: 0 ${rem("24px")};
  }
`;
