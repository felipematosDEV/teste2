import React from 'react';


const CardFinal = (props) => {
return(
    <div className="flex flex-column justify-center items-center">
        <p id="finalText" className="tc fw6 card-question button-font-size">{props.name1}</p>
        <div className="grayline"></div>
        <div className="flex justify-center items-center">
        <img className="imgFinal" src={props.imagem1}></img>
        <p id="finalText" className="tc card-font-size fw6 card-question font1">{props.name2}</p>
        </div>
        <div className="flex justify-center items-center">
        <img className="imgFinal" src={props.imagem2}></img>
        <p id="finalText" className="tc card-font-size fw6 card-question font1">{props.name3}</p>
        </div>
        <div className="grayline"></div>
    </div>
);
};

export default CardFinal;