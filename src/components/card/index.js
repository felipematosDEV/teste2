import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import CardText from './cardText/cardText';
import CardImage from './cardImage'
import imagem from '../../images';
import CardButton from './cardButton';
import changes from '../../images/fluxograma.json';
import {findObjById} from '../../utils';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pageId : 1, //initial
    }
    this.changePageId = this.changePageId.bind(this)
  }
  changePageId(attId) {
    this.setState({
      pageId: attId
    })
  }
  render() {
    return (

      <div className="principalCard">
        <Recaptcha sitekey='6Ldein4UAAAAABvxJaytNRs2Iu03mmZKsrvqZNsI' render='explicit' type='image'/>
        
        <div>
          <CardImage src={changes[findObjById(this.state.pageId)].imagem} />
          <CardText name={changes[findObjById(this.state.pageId)].pergunta}/>
        </div>
        <div className="items-center flex flex-column">
          <div className="btn-desktop">

          <div className="btnbutton">
            <CardButton isPrimary changePageId={this.changePageId} parentState={this.state} className="btnbutton">Sim</CardButton>
          </div>
          <div className="btnbuttonNao">
            <CardButton changePageId={this.changePageId} parentState={this.state}  className="btnbuttonNao">Não</CardButton>
          </div>
          </div>
          <CardButton link />
        </div>
      </div>
    );
  }
}

export default Card;