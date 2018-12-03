import React from 'react';


const CardText = (props) => {
return(
    <div className="flex flex-column justify-center items-center">
        <p id="paragrafo" className="tc card-font-size fw6 card-question">{props.name}</p>
        <div className="divline"></div>
    </div>
);
};

export default CardText;