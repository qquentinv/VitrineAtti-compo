import styled from "styled-components";

export const Case = styled.div`
  background: ${props =>
    props.primary ? "rgb(247, 247, 247)" : "rgb(247, 247, 247)"};
  margin: 50px;
  width: 40%;
  padding: 25px;
  margin-top: 50px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
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
