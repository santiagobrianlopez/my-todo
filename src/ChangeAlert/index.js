import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({sincronize}){
    const {show,toggleShow} = useStorageListener(sincronize);
    if(show){
        return (
            <div className='ChangeAlert'>
                <p>Hubo Cambios</p>
                <button
                onClick={() => toggleShow(false)}
                >
                    Click Para Actualizar
                </button>
            </div>
        );
    }else{
        return null;
    }
}

export {ChangeAlert}