import React from 'react'
import styled from 'styled-components';
import Quote from './Quote';
import quotes from '../Data/quotes.json';

const QuotesContainer = styled.div`
    padding: 0 20px;
    display: flex;
    place-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    margin-top: 10px;
`
QuotesContainer.displayName = 'QuotesContainer'

const Quotes = () => {
    return (
        <QuotesContainer>
            {quotes.map(({_id, ...otherQuoteProps }) => (
                <Quote key={_id} {...otherQuoteProps} />
            ))}
        </QuotesContainer>
    )
}

export default Quotes