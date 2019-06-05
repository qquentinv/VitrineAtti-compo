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
  cursor: pointer;
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

export const StyledImage = styled.div`
  display: flex;
  position: relative;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  color: #f29400;
  text-align: center;
  margin-bottom: 30px;
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
`;
