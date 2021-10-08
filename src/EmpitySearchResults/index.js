import React from 'react';

function EmpitySearchResults(props)  {
    return(
        <div className="EmpitySearchResults" >
            <p><b>No se encontro ningún resultado con <i>{props.searchText}</i></b></p>
        </div>
    );
}

export {EmpitySearchResults};