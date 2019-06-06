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
            desc=" As a Digital Service Company, Attineos claims to be different.

            Based on exchange, on the attitude as well as on the skills of our consultants, our services support the transformation of information systems. 
            
            Looking in the same direction as our customers, we provide them with the know-how and technology to integrate it into their businesses and support them in achieving their objectives.
            By promoting the success of our employees with transparency and confidence, we respect differences and develop potential.
            
            The personal development of our employees is a key element of our development. Based on respect, listening and proximity, your progress will be ours. Together, we will value entrepreneurship and initiative. 
            
            We are looking for enthusiastic profiles with a culture of surpassing oneself and continuous improvement.
            
            "
          />
        );
      case "Attisport":
        return (
          <Vitrine
            image={Attisport}
            link="https://www.attisport.fr/"
            title={page}
            desc=" Attisport is a betting website that is designed for Attineos' employees and customers.
            It sets up a system of points that are won as a result of betting on different matches during a defined competition.
            The winner is the person who has made the best bets and finishes with the highest number of points. Batches are thus set up for the first of each competition."
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
