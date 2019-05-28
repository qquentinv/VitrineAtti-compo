import styled from "styled-components";

export const Comment = styled.span`
  color: green;
`;

export const Block = styled.div`
  background: ${props =>
    props.primary ? "rgb(247, 247, 247)" : "rgb(247, 247, 247)"};
  margin: 20px;
  width: 40%;
  padding: 25px;
  margin-top: 100px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;
