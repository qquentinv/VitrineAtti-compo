import styled from "styled-components";
import { Header2, Header3, BigText, Breadcrumb } from "atti-components";

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

export const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 25px;
  padding-bottom: 20px;
  a {
    font-size: 24px;

    :hover {
      text-decoration: none;
    }
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobileMax}) {
      font-size: 16px;
    }
  }

  span {
    font-size: 24px;
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobileMax}) {
      font-size: 16px;
    }
  }
`;

export const customTheme = {
  components: {
    breadcrumb: {
      breadcrumbSeparator: {
        spaces: {
          marginLeft: "16px",
          marginRight: "16px"
        }
      }
    }
  }
};
