import React from "react";
import { Li, Liste } from "./style";

class LiPageTuto extends React.Component {
  render() {
    const { libelle, url } = this.props;
    const link = `/tutorials/${url}`;
    return (
          <Li
            onClick={() => {
              window.location.href = link;
            }}
          >
            {libelle}
          </Li>
    );
  }
}

export default LiPageTuto;
