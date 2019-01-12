import React from 'react';

import Articles from '../Articles';
import Slider from '../Slider'

export default function Content({content=[], onSlideNext=f=>f, onSlidePrev=f=>f, onSlideChange=f=>f}){

  const contentSections = content.map((item, index) =>         
  (item.type === "article") 
      ? <Articles {...item} key={index}/>
      : <Slider {...item} key={index} onSlideNext={onSlideNext} onSlidePrev={onSlidePrev} onSlideChange={onSlideChange}/>)

    return (           
         <React.Fragment>
           {contentSections}
         </React.Fragment>        
    )
}
