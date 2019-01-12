import React from 'react';
import './style.css';

export default function NavItem ({link, item, section}){  

        return(        
            <li className={`nav-item ${section}__nav-item `}>
              <a className = {`nav-link ${section}__nav-link`} href={`#${link}`}>
                {item}
              </a>            
            </li>
        )
    }
