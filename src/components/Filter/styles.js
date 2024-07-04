import styled, { css } from 'styled-components';

export const Container = styled.button`
  background: none;
  font-size: 1rem;
  border: 0;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  &:after {
    display:block;
    content: '';
    border-bottom: solid 3px ${({ theme }) => theme.COLORS.BLUE_300};  
    transition: all 250ms ease-in-out;
    padding-bottom: 1rem;
    transform: scaleX(0);
  }

  ${({ selected, theme }) => selected && css`
    font-weight: 700;
    &:after { transform: scaleX(1); }
    color: ${theme.COLORS.BLUE_300}
  `};

`;