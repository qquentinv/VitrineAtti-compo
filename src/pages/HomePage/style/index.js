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
  border-radius: 2px; 
   & + & {
    margin-left: 30px;
  }

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.mobileMax}) {
    width:100%
    margin-bottom : 30px;
    & + & {
      margin-left: 0px;
    }
  }

`;

export const Content = styled.div`
  padding-top: 100px;
  padding-bottom: 159px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    padding-top: 50px;
    padding-bottom: 124px;
  }
`;

export const PresentationTxt = styled.div`
  margin-top: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledImage = styled.div`
  flex-shrink: 0;
  margin: 10px;
`;

export const PresentationTop = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const PresentationBlock = styled.div`
  display: flex;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  color: #f29400;
`;

export const Subtitle = styled.h3`
  margin-top: 30px;
`;

export const Coding = styled.div`
  background-color: rgb(230, 230, 230);
  padding: 10px;
  border-radius: 3px;
  box-shadow: 1px rgb(247, 247, 247);
  font-family: Consolas;
`;
