import React from 'react';
import './style.css';

export default function Input({inputProp, section, index, onChangeHandler}){
    console.log(inputProp.value, inputProp.valid)
    return (
            <div className = {`input-wrapper input-wrapper--${inputProp.type} ${inputProp.hidden ? "hidden" : ""}`}
                  key={index}>
                <label htmlFor={inputProp.name} 
                        className={`label label--${inputProp.name}`}>
                        
                    <div className={`label__text label__text--${inputProp.name}`}>
                        {inputProp.item}
                    </div>                    
                
                    <input  onChange={(e) =>onChangeHandler(e, index)} 
                            required = {inputProp.required} 
                            placeholder = {inputProp.placeholder} 
                            type = {inputProp.type} 
                            name = {inputProp.name} 
                            id = {inputProp.name}
                            hidden = {inputProp.hidden} 
                            className={`input--${inputProp.name} input--${inputProp.valid ? "valid" : "invalid"}`} 
                            key={index}>                
                    </input>
                </label>
            </div>
        
    )
}
