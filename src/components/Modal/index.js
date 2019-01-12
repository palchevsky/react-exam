import React from 'react';
import './style.css';
import {AddSlideFormConnect} from '../../store/connects';

const Modal = ({title, section, intro, buttonText, onToggleModal})=>{

    return (
            <div className = {`modal modal--${section}`}>
                <h1>{title}</h1>
                <p>{intro}</p>
                <button className={`modal__button modal__button--${section}`} 
                    onClick={()=>onToggleModal("modal")}> 
                {buttonText}               
                </button>
                <AddSlideFormConnect/>
            </div>
        
    )
}

export default Modal
