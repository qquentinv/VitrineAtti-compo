import styled from "styled-components";

export const Case = styled.div`
  background: ${props => (props.primary ? "white" : "white")};
  margin: 20px;
  width: 50%;
  padding: 25px;
  margin-top: 20px;
  box-shadow: 1px 1px 1px lightgrey;
`;

export const Button = styled.button`
  background: ${props => (props.primary ? "#f29400" : "#f29400")};
  color: ${props => (props.primary ? "white" : "white")};
  font-size: 1em;
  margin: 1em;
  padding: 0.45em 1em;
  border: 1px solid white;

  display: flex;
  align-items: center;
  img.black {
    display: none;
  }
  img.white {
    display: flex;
  }
`;

export const Ligne = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const CaseAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
