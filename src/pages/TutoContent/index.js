import React from "react";
import { Content } from "./style";
import { Container } from "atti-components";
import Tuto from "../../components/Tuto";

class TutoContent extends React.Component {
  affichage = nomPage => {
    switch (nomPage) {
      case "tuto1":
        return (
          <Tuto
            title="Overall Title(Tuto1)"
            subtitle1="Subtitle 1"
            p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle2="Subtitle 2"
            p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle3="Subtitle 3"
            p3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
          />
        );
      case "tuto2":
        return (
          <Tuto
            title="Overall Title(Tuto2)"
            subtitle1="Subtitle 1"
            p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle2="Subtitle 2"
            p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle3="Subtitle 3"
            p3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
          />
        );
      case "tuto3":
        return (
          <Tuto
            title="Overall Title(Tuto3)"
            subtitle1="Subtitle 1"
            p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle2="Subtitle 2"
            p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle3="Subtitle 3"
            p3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
          />
        );
      case "tuto4":
        return (
          <Tuto
            title="Overall Title(Tuto 4)"
            subtitle1="Subtitle 1"
            p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle2="Subtitle 2"
            p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle3="Subtitle 3"
            p3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque euismod ante, vel facilisis lacus fringilla sed.
        Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
        Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
        nisl commodo volutpat. Ut viverra tempus augue et porttitor.
        Suspendisse non tincidunt sem. Nullam nec augue urna."
          />
        );
      case "tuto5":
        return (
          <Tuto
            title="Overall Title (Tuto 5)"
            subtitle1="Subtitle 1"
            p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pellentesque euismod ante, vel facilisis lacus fringilla sed.
          Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
          Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
          nisl commodo volutpat. Ut viverra tempus augue et porttitor.
          Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle2="Subtitle 2"
            p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pellentesque euismod ante, vel facilisis lacus fringilla sed.
          Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
          Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
          nisl commodo volutpat. Ut viverra tempus augue et porttitor.
          Suspendisse non tincidunt sem. Nullam nec augue urna."
            subtitle3="Subtitle 3"
            p3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pellentesque euismod ante, vel facilisis lacus fringilla sed.
          Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
          Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
          nisl commodo volutpat. Ut viverra tempus augue et porttitor.
          Suspendisse non tincidunt sem. Nullam nec augue urna."
          />
        );

      default:
        return <h1>Erreur 404 not found</h1>;
    }
  };
  render() {
    const { match } = this.props;
    const nomPage = match.params.tutorialName;
    console.log(nomPage);

    return (
      <Content>
        <Container>{this.affichage(nomPage)}</Container>
      </Content>
    );
  }
}

export default TutoContent;
