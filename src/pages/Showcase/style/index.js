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
