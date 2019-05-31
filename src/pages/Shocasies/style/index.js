import styled from "styled-components";

export const Image = styled.div`
  position: relative;
  width: 1548px;
  height: 935px;
  background-size: cover;
  background-image: url(${props => props.src});
  &:hover {
    div {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Background = styled.div`
  background-color: rgba(253, 253, 253, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  visibility: hidden;
  opacity: 0;
  z-index: 2;
  transition: all 0.3s linear;
`;

export const Ecrit = styled.h1`
  color: black;
  text-align: center;
  margin: 451px;
`;

export const Content = styled.div`
  padding-top: 100px;
  padding-bottom: 174px;
`;
