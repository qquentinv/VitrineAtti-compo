import styled from "styled-components";
import { Header2, Header3, BigText } from "atti-components";

export const Content = styled.div`
  padding-top: 100px;
  padding-bottom: 159px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    padding-top: 50px;
    padding-bottom: 124px;
  }
`;

export const StyledHeader2 = styled(Header2)`
  margin-bottom: 45px;
  text-align: center;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    font-size: 40px;
  }
`;

export const StyledHeader3 = styled(Header3)`
  margin: 25px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    font-size: 28px;
  }
`;

export const StyledBigText = styled(BigText)`
  margin: 25px;
  text-align: justify;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    font-size: 16px;
  }
`;
