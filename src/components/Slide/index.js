import React from 'react';
import './style.css';

export default function Slide({link, path, title, intro, statement, current, index}){

    return (
            <div style = {{backgroundImage: `url(${path})`}} className = { `slide-layout ${link}__slide-layout  ${(current === index) ? "current" : ""}` } >
              <h3  className = {`${link}__slide-heading`}>{title}</h3>
              <p   className = {`${link}__slide-intro`}>{intro}</p>
              <blockquote  className = {`${link}__slide-quote`}>{statement}</blockquote>
            </div>           
        
    )
}


