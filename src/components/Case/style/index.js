import styled from "styled-components";
import { Text } from "atti-components";

export const StyledCase = styled.div`
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

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const StyledText = styled(Text)`
  text-align: center;
`;
