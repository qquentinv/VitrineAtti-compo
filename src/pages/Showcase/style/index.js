import styled from "styled-components";

export const Content = styled.div`
  padding-top: 75px;
  padding-bottom: 174px;
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

export const Case = styled.div`
  background: ${props => (props.primary ? "white" : "white")};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 20px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  background: ${props => (props.primary ? "#f29400" : "#f29400")};
  color: ${props => (props.primary ? "white" : "white")};
  font-size: 1em;
  margin: 1em;
  padding: 0.45em 1em;
  border: 1px solid white;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: #f29400;
  text-align: center;
`;

export const Img = styled.img`
    max-width: 100%;
    height: auto;
`;
