import React from "react";
import { Li } from "./style";
import { history } from "../../";

class LiPageTuto extends React.Component {
  render() {
    const { libelle, url } = this.props;
    const link = `/tutorials/${url}`;
    return (
      <Li
        onClick={() => {
          history.push(link);
        }}
      >
        {libelle}
      </Li>
    );
  }
}

export default LiPageTuto;
