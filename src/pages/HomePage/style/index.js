import styled from "styled-components";

export const Comment = styled.span`
  color: green;
`;

export const Block = styled.div`
  background: ${props =>
    props.primary ? "rgb(247, 247, 247)" : "rgb(247, 247, 247)"};
  width: 50%;
  padding: 25px;
  border: 1px solid lightgrey;

  & + & {
    margin-left: 30px;
  }
`;

export const Content = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;
