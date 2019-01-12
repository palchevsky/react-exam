import React from 'react';
import Article from '../Article';
import './style.css';

export default function Articles({link, title, item, type, articles}){


    

    const articleItems = articles.map((item, index) =>
        <Article {...item} key={index} section={link}/>
    )

    return (
        <section id={link} className={`articles__list ${link}__articles--list`}>
            <div className="container">
                <h5 className={`articles--heading ${link}__articles--heading`}>
                    {title}            
                </h5>

                <div className={`articles--wrapper ${link}__articles--wrapper`}>
                    {articleItems}
                </div>
                

            </div>
        </section>
    )

}
