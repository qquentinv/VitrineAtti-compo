import styled from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: #f29400;
  color: ${({ theme }) => theme.colors.white};

  font-size: 1em;
  margin: 1em;
  padding: 0.45em 1em;
  border: 1px solid white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  img.black {
    display: none;
  }
  img.white {
    display: flex;
  }

  :hover {
    background: ${({ theme }) => theme.colors.white};
    color: #f29400 img.black {
      display: flex;
    }
    img.white {
      display: none;
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
  theme.breakpoints.mobileMax}) {
    font-size: 0;
    border: 0;
    margin: 15px;
  }
`;

export const Title = styled.h1`
  color: white;
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) =>
  theme.breakpoints.mobileMax}) {
    font-size: ${({ theme }) => theme.fonts.fontSize.fs24};
  }
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

export const DivHeader = styled.div`
  background-color: #f29400;
  display: flex;
  align-items: center;
`;

export const Align = styled.div`
  display: flex;
  width: 33.3%;

  &.left {
    justify-content: flex-start;
  }

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }
`;
