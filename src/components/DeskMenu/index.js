import React from 'react';
import NavItem from '../NavItem';
import './style.css';

export default function DeskMenu({content, section}){

  const deskItems = content.map((i, index) =>
      <NavItem link = {i.link} item = {i.item} key={index} section={section}/>
  )

  return (
      <nav  className={`desk-nav ${section}__desk-nav`}>
        <ul className={`desk-nav-list ${section}__desk-nav-list`}>
          {deskItems}
        </ul>            
      </nav>
  )

}
