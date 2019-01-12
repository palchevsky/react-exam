import React from 'react';
import './style.css';

export default function Dott({link, current, index, clickHandler}){

    return (
            <button  className = { `slide-dott ${link}__slide-dott  ${(current === index) ? "current" : ""}` } onClick = {clickHandler}>

            </button>           
        
    )
}
