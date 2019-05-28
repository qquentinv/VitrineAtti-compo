import styled from "styled-components";

export const Case = styled.div`
  background: ${props =>
    props.primary ? "rgb(247, 247, 247)" : "rgb(247, 247, 247)"};
  margin: 200px;
  width: 80%;
  padding: 15px;
  margin-top: 100px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;
