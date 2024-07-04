import styled from "styled-components";

export const Container = styled.section`
  padding: 0 32px;
`;

export const Filters = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 1rem;
  margin-right: 10px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;