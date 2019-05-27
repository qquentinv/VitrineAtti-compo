import styled from "styled-components";

export const Comment = styled.span`
  color: green;
`;

export const Block = styled.div`
  background: ${props =>
    props.primary ? "rgb(247, 247, 247)" : "rgb(247, 247, 247)"};
  margin: 20px;
  width: 40%;
  padding: 15px;
  margin-top: 100px;
  border: 2px solid lightgrey;
`;
