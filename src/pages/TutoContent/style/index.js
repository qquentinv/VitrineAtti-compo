import styled from "styled-components";

export const Content = styled.div`
  padding-top: 100px;
  padding-bottom: 159px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    padding-top: 50px;
    padding-bottom: 124px;
  }
`;
