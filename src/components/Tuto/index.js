import React from "react";
import {
  StyledHeader2,
  StyledHeader3,
  StyledBigText,
  StyledBreadcrumb
} from "./style";

class Tuto extends React.Component {
  render() {
    const { title, subtitle1, subtitle2, subtitle3, p1, p2, p3 } = this.props;
    return (
      <div>
        <StyledHeader2>{title}</StyledHeader2>
        <StyledBreadcrumb
          elements={[
            { name: "Home", url: "/" },
            { name: "Tutorials", url: "/tutorials" },
            { name: title }
          ]}
          separator={">"}
        />
        <StyledHeader3>{subtitle1}</StyledHeader3>
        <StyledBigText>{p1}</StyledBigText>
        <StyledHeader3>{subtitle2}</StyledHeader3>
        <StyledBigText>{p2}</StyledBigText>
        <StyledHeader3>{subtitle3}</StyledHeader3>
        <StyledBigText>{p3}</StyledBigText>
      </div>
    );
  }
}

export default Tuto;
