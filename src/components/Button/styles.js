import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  color: ${({ theme }) => theme.COLORS.BLUE_600};

  border: 0;
  height: 3.5rem;
  padding: 0 1rem;
  font-weight: 500;
  border-radius: 0.43rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > span {
    font-size: 1rem;
  }

  > svg {
    font-size: 1.37rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    height: 3rem;
    padding: 0 0.5rem;
    > span {
      font-size: 0.8rem;
    }

    > svg {
      font-size: 1rem;
    }
  }
`;
