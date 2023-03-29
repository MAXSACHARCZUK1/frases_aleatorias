import React from 'react'

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {
    const colorObj = {
        color: randomColor
    }
    const bgObj = {
        backgroundColor: randomColor
    }
    return (
        <article style={colorObj} className='card'>
            <p className='card__quote'>{randomQuote.quote}</p>
            <h1 className='card__author'>{randomQuote.author}</h1>
            <button onClick={getRandomAll} className='card__btn' style={bgObj}>&#62;</button>
        </article>
    )
}

export default QuoteBox