import styled from "styled-components";

export const Content = styled.div`
  padding-top: 100px;
  padding-bottom: 159px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    padding-top: 50px;
    padding-bottom: 87px;
  }
`;

export const Li = styled.li`
  margin-bottom: 45px;
  cursor: pointer;
  text-decoration: underline;
  font-size: 30px;
  :hover {
    color: #f49700;
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  color: #f29400;
  font-size: 40px;
  text-align: center;
  margin-bottom: 25px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    font-size: 35px;
  }
`;

export const Liste = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    font-size: 18px;
  }
`;
