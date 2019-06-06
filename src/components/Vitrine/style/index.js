import styled from "styled-components";
import { Image, BigText, Link } from "atti-components";

export const Img = styled(Image)`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Background = styled.div`
  background-color: rgba(253, 253, 253, 0.8);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  visibility: hidden;
  opacity: 0;
  z-index: 2;
  transition: all 0.3s linear;
  cursor: pointer;
`;

export const Ecrit = styled.h1`
  color: black;
  text-align: center;
`;

export const StyledImage = styled.div`
  display: flex;
  position: relative;

  margin-bottom: 50px;
  &:hover {
    div {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  color: #f29400;
  text-align: center;
  margin-bottom: 30px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    font-size: 30px;
  }
`;

export const StyledBigText = styled(BigText)`
  margin-bottom: 20px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    font-size: 16px;
  }
`;

export const StyledLink = styled(Link)`
  color: #f29400;
  border-bottom: 0
  
  :hover {
    color: #f29400;
    border-bottom: 0;
  }
`;
