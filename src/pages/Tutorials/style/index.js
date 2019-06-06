import styled from "styled-components";

export const Content = styled.div`
  padding-top: 100px;
  padding-bottom: 174px;

  @media only screen and (max-width: ${({ theme }) =>
  theme.breakpoints.mobileMax}) {
    padding-top: 50px;
    padding-bottom: 87px;
}
`;

export const Li = styled.li`
  margin-bottom: 45px;
  cursor: pointer;

  :hover {
    color: #f49700;
  }
`;

export const Title = styled.h1`
  color: #f29400;
  margin-bottom: 50px;
  font-size:35px;

  @media only screen and (max-width: ${({ theme }) =>
  theme.breakpoints.mobileMax}) {
    text-align:center;
}
`;

export const Liste = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    font-size: 18px;
  }
`;
