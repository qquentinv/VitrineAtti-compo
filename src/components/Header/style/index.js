import styled from "styled-components";

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

  :hover {
    background: ${props => (props.primary ? "#white" : "white")};
    color: ${props => (props.primary ? "#f29400" : "#f29400")};
  }
`;

export const Logo = styled.div`
  color: white;
`;

export const Input = styled.input.attrs(({ size }) => ({
  type: "text",
  margin: size || "1em",
  padding: size || "0.35em"
}))`
  color: black;
  font-size: 1em;
  border: 2px solid white;
  border-radius: 3px;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;
