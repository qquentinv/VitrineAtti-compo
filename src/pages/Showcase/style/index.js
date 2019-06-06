import styled from "styled-components";

export const Content = styled.div`
  padding-top: 75px;
  padding-bottom: 159px;
  background-color: rgb(247, 247, 247);
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    padding-top: 50px;
    padding-bottom: 124px;
  }
`;

export const Ligne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 50px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #f29400;
  text-align: center;
`;
