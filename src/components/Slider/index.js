import React, {Component} from 'react';
import Slide from '../Slide';
import './style.css';
import Button from '../Button/';
import Dott from '../Dott';


class Slider extends Component{
    constructor(props){
        super(props)
        this.state = {
         
          
        }        
       
        // this.clickHandlerRight = this.clickHandlerRight.bind(this);
        // this.clickHandlerLeft = this.clickHandlerLeft.bind(this);
    }

    render(){ 
        
        
        const {link, title, item, type, dotted, carousel, current, slides, id, onSlideNext, onSlidePrev, onSlideChange} = this.props;

        const {length} = slides;

        const SlidesAll = slides.map((slideProp, index) => 
          <Slide link={link} {...slideProp} index = {index} key={index} current = {current}/>);
          
        const Dottes = [...Array(length).fill()].map((item, index)=> <Dott link={link} index = {index} key={index} current = {current} clickHandler={() => onSlideChange(id, index)}/>)
        

        return(        
            <section className = {`slide-section ${link}__slide-section`}>
                <h2 className = {`${link}__heading`}>
                  {title}
                </h2>
                
                <div className = {`${link}__slide-wrapper slide-wrapper`}>
                  <Button buttonText = "<" clickHandler = {()=>onSlidePrev(id, current)} section="slider-left"/>  
                      {SlidesAll}
                  <Button buttonText = ">" clickHandler = {()=>onSlideNext(id, current)} section="slider-right"/>
                </div>

                <div className = {`${link}__dottes-wrapper dottes-wrapper`}>
                  {Dottes} 
                </div>
                               
            </section>  
        )
    }

    
    // dottHandler = (index) =>{
    //     this.setState({
    //       currentSlide: index
    //   })
    // }

    // clickHandlerRight = () => {
      
    //   const len =  this.props.slides.length-1;
    //   let cs = this.state.currentSlide;
    //   cs === len ? cs = 0 : cs=cs+1;
    //   this.setState({
    //       currentSlide: cs
    //   })      
    // }

    // clickHandlerLeft = () => {
    //   const len =  this.props.slides.length-1;
    //   let cs = this.state.currentSlide;
    //   cs == 0 ? cs = len : cs=cs-1;
    //   this.setState({
    //       currentSlide: cs
    //   })       
    //  }
}
        
    
export default Slider;
