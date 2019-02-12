import React from 'react';
import PropTypes from 'prop-types'
import './books.css';

function Books({title,subtitle,author,page, description}){
    return (
        <div className="books">
            <p>title : {title}</p>
            <img src={subtitle} alt=""/>
            <p>author : {author}</p>
            <p>pages : {page}</p>
            <Desc description = {description}/>
        </div>
    )
}

function Desc({description}){
    return (
        <div className="desc">
            <p>publish_date : {description}</p>
        </div>
    )
}

Desc.propTypes = {
    description : PropTypes.string.isRequired
}

Books.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string.isRequired,
    author : PropTypes.string.isRequired,
    page : PropTypes.number.isRequired,
};

export default Books;
