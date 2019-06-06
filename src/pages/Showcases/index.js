import React from "react";
import Attineos from "../../image/attineos2.png";
import Attisport from "../../image/attisport2.png";
import Atrakeur from "../../image/atrakeur2.png";
import CodeTrotteur from "../../image/code-trotteur2.png";
import Vitrine from "../../components/Vitrine";

import { Content } from "./style";
import { Container } from "atti-components";

class Showcases extends React.Component {
  fct = page => {
    switch (page) {
      case "Attineos":
        return (
          <Vitrine
            image={Attineos}
            link="https://www.attineos.com/"
            title={page}
            desc=" Epigonum nec ducitur industria si Montius sed orator res nec et et
        insimulasset Epigonum ostendens qui quaestor et philosophus sed
        quaestor fabricarum intepesceret orator ducitur qui Eusebius
        tribunos promittentes agitari Lycia philosophus quaerebatur inter
        armorum manus nequid novas tribunos ducitur manus sed nec ab
        Eusebium inter philosophus spiritum dignitatem increpabat."
          />
        );
      case "Attisport":
        return (
          <Vitrine
            image={Attisport}
            link="https://www.attisport.fr/"
            title={page}
            desc=" Epigonum nec ducitur industria si Montius sed orator res nec et et
        insimulasset Epigonum ostendens qui quaestor et philosophus sed
        quaestor fabricarum intepesceret orator ducitur qui Eusebius
        tribunos promittentes agitari Lycia philosophus quaerebatur inter
        armorum manus nequid novas tribunos ducitur manus sed nec ab
        Eusebium inter philosophus spiritum dignitatem increpabat."
          />
        );
      case "Atrakeur":
        return (
          <Vitrine
            image={Atrakeur}
            link="https://www.atrakeur.com/"
            title={page}
            desc=" Epigonum nec ducitur industria si Montius sed orator res nec et et
        insimulasset Epigonum ostendens qui quaestor et philosophus sed
        quaestor fabricarum intepesceret orator ducitur qui Eusebius
        tribunos promittentes agitari Lycia philosophus quaerebatur inter
        armorum manus nequid novas tribunos ducitur manus sed nec ab
        Eusebium inter philosophus spiritum dignitatem increpabat."
          />
        );
      case "Code-trotteur":
        return (
          <Vitrine
            image={CodeTrotteur}
            link="https://code-trotter.com/"
            title={page}
            desc=" Epigonum nec ducitur industria si Montius sed orator res nec et et
      insimulasset Epigonum ostendens qui quaestor et philosophus sed
      quaestor fabricarum intepesceret orator ducitur qui Eusebius
      tribunos promittentes agitari Lycia philosophus quaerebatur inter
      armorum manus nequid novas tribunos ducitur manus sed nec ab
      Eusebium inter philosophus spiritum dignitatem increpabat."
          />
        );

      default:
        return <h1>Tu t'es trompé</h1>;
    }
  };
  render() {
    const { match } = this.props;
    const page = match.params.showcaseName;
    console.log(page);
    return (
      <Content>
        <Container>{this.fct(page)}</Container>
      </Content>
    );
  }
}

export default Showcases;
