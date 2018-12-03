import React, { Component } from 'react';
import CardTextFinal from './cardTextFinal/cardTextFinal.js';
import CardFinal from './cardFinal/cardFinal.js';
import imagem from '../../images';
import CardButton from './cardButton';
import changes from '../../images/fluxograma.json';

class Card extends Component {
  render() {
    console.log(imagem.gif16);
    return (
      <div className="finalCard">
        <div>
          <CardTextFinal id="txtFinal" name="Que pena! Talvez o ano que vem."/>
        </div>
        <div>
          <CardFinal name1="Esperamos você para comemorar com a gente:" name2="Rua Antônio Domingues, 362, Chácaras Tubalina." imagem1={imagem.placeholder} name3="Dia 14/12 às 19h 30." imagem2={imagem.clock} />
        </div>
          <div className="flex flex-column items-center">
            <CardButton id="btnFinal" isPrimary>Finalizar</CardButton>
          <CardButton link/>
        </div>
      </div>
    );
  }
}

export default Card;