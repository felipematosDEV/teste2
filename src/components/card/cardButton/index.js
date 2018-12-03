import React, { Component } from 'react';
import changes from '../../../images/fluxograma.json';
import {findObjById} from '../../../utils';


const nao = 'Não';
const sim = 'Sim';




const ClickVerif = (children, changePageId, parentState) => {
    switch (children) {
        case nao:
            changePageId(changes[findObjById(parentState.pageId)].nao);
            break;

        case sim:
        changePageId(changes[findObjById(parentState.pageId)].sim);
            break;
        
        default:
        changePageId(changes[0]);
            break;
    }
}

const PrimaryButton = ({isPrimary, children, changePageId, parentState}) => {
    const cls = isPrimary ? 'bg-buttony white br24 button-height-mobile button-width-mobile button-noborder button-font-size button-margin-top button-margin-bottom-primary bthover outline-0-ns btactive1 pointer' : '.text-color-blue br24 bg-button-transp button-height-mobile button-width-mobile button-border button-font-size button-margin-bottom-secundary bthover outline-0-ns btactive2 pointer text-color-blue';
    return (
    <button className={cls} onClick={() => ClickVerif(children, changePageId, parentState)}>{children}</button>
   );

};

const PrimaryLink = () => {
    return(
        <a href="#" className="button-font-size outline-0 text-color-blue link-decoration-none button-border-bottom">Recomeçar Quiz</a>
    );
};

const CardButton = props => {
    const ButtonComp = props.link ? PrimaryLink : PrimaryButton;
    return <ButtonComp {...props}/>
  };

export default CardButton;