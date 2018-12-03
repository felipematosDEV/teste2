import React from 'react';


const CardTextFinal = (props) => {
return(
    <div className="flex flex-column justify-center items-center">
        <p id="txtFinal" className="tc card-font-size fw6 card-question wFinal">{props.name}</p>
        <div className="divline"></div>
    </div>
);
};

export default CardTextFinal;