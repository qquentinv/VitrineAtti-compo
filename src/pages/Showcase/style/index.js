import styled from "styled-components";

export const Case = styled.div`
  background: ${props => (props.primary ? "white" : "white")};
  margin: 50px;
  width: 40%;
  padding: 25px;
  margin-top: 50px;
  box-shadow: 1px 1px 1px lightgrey;
  border-radius: 10px;
`;

export const Button = styled.button`
  background: ${props => (props.primary ? "#f29400" : "#f29400")};
  color: ${props => (props.primary ? "white" : "white")};

  font-size: 1em;
  margin: 1em;
  padding: 0.45em 1em;
  border: 1px solid white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  img.black {
    display: none;
  }
  img.white {
    display: flex;
  }

  :hover {
    background: ${props => (props.primary ? "#white" : "white")};
    color: ${props => (props.primary ? "#f29400" : "#f29400")};
    img.black {
      display: flex;
    }
    img.white {
      display: none;
    }
  }
`;

export const Ligne = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
`;

export const CaseAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
