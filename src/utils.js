import changes from './images/fluxograma.json';


const findObjById = (id) => {
    var result = -1;
    changes.map((iValue, i) => {
        if(iValue.id === id.toString())
            result = i;
    })

    return result;
}


export {
    findObjById,
}